import type { INextUserEpisode } from '@/api/types/user.types';

export interface NextEpisodeCardProps {
  episode: INextUserEpisode;
  onDelete?: (episode: INextUserEpisode) => void;
}
