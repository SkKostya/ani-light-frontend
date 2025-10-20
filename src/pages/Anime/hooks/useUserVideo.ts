import { useRef } from 'react';

import { userApi } from '@/api/user.api';
import { getClientToken } from '@/shared/services/user-hash';

const useUserVideo = () => {
  const token = getClientToken();

  const markedAsWatching = useRef(false);
  const markedAsWatched = useRef(false);

  const handleStartWatching = async (episodeId: string) => {
    if (!token || markedAsWatching.current) return;
    try {
      await userApi.markEpisodeWatching(episodeId);
      markedAsWatching.current = true;
    } catch (error) {
      console.error(error);
    }
  };

  const handleMarkEpisodeWatched = async (episodeId: string) => {
    if (!token || markedAsWatched.current) return;
    try {
      await userApi.markEpisodeWatched(episodeId, {
        watched_until_end: true
      });
      markedAsWatched.current = true;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    markedAsWatching,
    markedAsWatched,
    handleStartWatching,
    handleMarkEpisodeWatched
  };
};

export default useUserVideo;
