import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

class StorageApi {
  updateWatchingTime = (data: {
    seasonExternalId: number;
    episodeNumber: number;
    watchingTime: number;
  }) => {
    if (!data.seasonExternalId || !data.episodeNumber || !data.watchingTime)
      return;
    const watchingTime = cookies.get('watching_time') || '';
    const watchingTimeData = watchingTime
      ? (watchingTime.split('-') as string[])
      : [];
    const index = watchingTimeData.findIndex((time: string) => {
      const [savedSeasonExternalId, savedEpisodeNumber] = time
        .split('.')
        .map(Number);
      return (
        data.seasonExternalId === savedSeasonExternalId &&
        data.episodeNumber === savedEpisodeNumber
      );
    });
    if (index !== -1) {
      watchingTimeData[index] = [
        data.seasonExternalId,
        data.episodeNumber,
        data.watchingTime
      ].join('.');
    } else {
      watchingTimeData.push(
        [data.seasonExternalId, data.episodeNumber, data.watchingTime].join('.')
      );
    }
    if (watchingTimeData.length > 20) {
      watchingTimeData.shift();
    }
    cookies.set('watching_time', watchingTimeData.join('-'), {
      maxAge: 1000 * 60 * 60 * 24 * 30
    });
  };

  getWatchingTime = (seasonExternalId: number, episodeNumber: number) => {
    const watchingTime = cookies.get('watching_time') || '';
    const watchingTimeData = watchingTime.split('-') as string[];
    const time = watchingTimeData.find((time: string) => {
      const [savedSeasonExternalId, savedEpisodeNumber] = time
        .split('.')
        .map(Number);
      return (
        seasonExternalId === savedSeasonExternalId &&
        episodeNumber === savedEpisodeNumber
      );
    });
    return time ? Number(time.split('.')[2]) : 0;
  };
}

export const storageApi = new StorageApi();
