import { userApi } from '@/api/user.api';
import { getClientToken } from '@/shared/services/user-hash';

const useUserVideo = () => {
  const token = getClientToken();

  const handleStartWatching = async (episodeId: string) => {
    if (!token) return;
    try {
      await userApi.markEpisodeWatching(episodeId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMarkEpisodeWatched = async (episodeId: string) => {
    if (!token) return;
    try {
      await userApi.markEpisodeWatched(episodeId, {
        watched_until_end: true
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleStartWatching,
    handleMarkEpisodeWatched
  };
};

export default useUserVideo;
