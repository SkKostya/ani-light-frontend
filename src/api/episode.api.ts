import { ApiConnector } from './api.connector';
import type {
  CommentReaction,
  CommentReactionDto,
  CommentStats,
  CreateEpisodeCommentDto,
  CreateEpisodeRatingDto,
  EpisodeComment,
  EpisodeCommentsResponse,
  EpisodeDetails,
  EpisodeRating,
  EpisodeRatingResponse,
  GetEpisodeDetailsParams,
  GetEpisodesParams,
  UpdateEpisodeCommentDto,
  UpdateEpisodeRatingDto
} from './types/episode.types';

class EpisodeApi extends ApiConnector {
  /**
   * Получить список эпизодов для аниме
   */
  getEpisodes(params: GetEpisodesParams): Promise<EpisodeDetails[]> {
    return this.call<GetEpisodesParams, EpisodeDetails[]>({
      path: 'episodes',
      method: 'get',
      params
    });
  }

  /**
   * Получить детали эпизода по ID
   */
  getEpisodeDetails(params: GetEpisodeDetailsParams): Promise<EpisodeDetails> {
    return this.call<GetEpisodeDetailsParams, EpisodeDetails>({
      path: `episodes/by-number`,
      method: 'get',
      params
    });
  }

  // === РЕЙТИНГИ ЭПИЗОДОВ ===

  /**
   * Создать оценку эпизода
   */
  createEpisodeRating(
    episodeId: string,
    data: CreateEpisodeRatingDto
  ): Promise<EpisodeRating> {
    return this.call<CreateEpisodeRatingDto, EpisodeRating>({
      path: `episodes/${episodeId}/ratings`,
      method: 'post',
      body: data
    });
  }

  /**
   * Получить все оценки эпизода
   */
  getEpisodeRatings(episodeId: string): Promise<EpisodeRating[]> {
    return this.call<never, EpisodeRating[]>({
      path: `episodes/${episodeId}/ratings`,
      method: 'get'
    });
  }

  /**
   * Получить среднюю оценку эпизода
   */
  getEpisodeAverageRating(episodeId: string): Promise<EpisodeRatingResponse> {
    return this.call<never, EpisodeRatingResponse>({
      path: `episodes/${episodeId}/ratings/average`,
      method: 'get'
    });
  }

  /**
   * Получить мою оценку эпизода
   */
  getMyEpisodeRating(episodeId: string): Promise<EpisodeRating> {
    return this.call<never, EpisodeRating>({
      path: `episodes/${episodeId}/ratings/my`,
      method: 'get'
    });
  }

  /**
   * Обновить мою оценку эпизода
   */
  updateMyEpisodeRating(
    episodeId: string,
    data: UpdateEpisodeRatingDto
  ): Promise<EpisodeRating> {
    return this.call<UpdateEpisodeRatingDto, EpisodeRating>({
      path: `episodes/${episodeId}/ratings/my`,
      method: 'patch',
      body: data
    });
  }

  /**
   * Удалить мою оценку эпизода
   */
  deleteMyEpisodeRating(episodeId: string): Promise<void> {
    return this.call<never, void>({
      path: `episodes/${episodeId}/ratings/my`,
      method: 'delete'
    });
  }

  // === КОММЕНТАРИИ К ЭПИЗОДАМ ===

  /**
   * Создать комментарий к эпизоду
   */
  createEpisodeComment(
    episodeId: string,
    data: CreateEpisodeCommentDto
  ): Promise<EpisodeComment> {
    return this.call<CreateEpisodeCommentDto, EpisodeComment>({
      path: `episodes/${episodeId}/comments`,
      method: 'post',
      body: data
    });
  }

  /**
   * Получить комментарии к эпизоду
   */
  getEpisodeComments(
    episodeId: string,
    page: number = 1,
    limit: number = 20
  ): Promise<EpisodeCommentsResponse> {
    return this.call<{ page: number; limit: number }, EpisodeCommentsResponse>({
      path: `episodes/${episodeId}/comments`,
      method: 'get',
      params: { page, limit }
    });
  }

  /**
   * Получить комментарий по ID
   */
  getEpisodeComment(
    episodeId: string,
    commentId: string
  ): Promise<EpisodeComment> {
    return this.call<never, EpisodeComment>({
      path: `episodes/${episodeId}/comments/${commentId}`,
      method: 'get'
    });
  }

  /**
   * Получить ответы на комментарий
   */
  getCommentReplies(
    episodeId: string,
    commentId: string,
    page: number = 1,
    limit: number = 20
  ): Promise<EpisodeCommentsResponse> {
    return this.call<{ page: number; limit: number }, EpisodeCommentsResponse>({
      path: `episodes/${episodeId}/comments/${commentId}/replies`,
      method: 'get',
      params: { page, limit }
    });
  }

  /**
   * Обновить комментарий
   */
  updateEpisodeComment(
    episodeId: string,
    commentId: string,
    data: UpdateEpisodeCommentDto
  ): Promise<EpisodeComment> {
    return this.call<UpdateEpisodeCommentDto, EpisodeComment>({
      path: `episodes/${episodeId}/comments/${commentId}`,
      method: 'patch',
      body: data
    });
  }

  /**
   * Удалить комментарий
   */
  deleteEpisodeComment(episodeId: string, commentId: string): Promise<void> {
    return this.call<never, void>({
      path: `episodes/${episodeId}/comments/${commentId}`,
      method: 'delete'
    });
  }

  /**
   * Добавить реакцию к комментарию
   */
  addCommentReaction(
    episodeId: string,
    commentId: string,
    data: CommentReactionDto
  ): Promise<CommentReaction> {
    return this.call<CommentReactionDto, CommentReaction>({
      path: `episodes/${episodeId}/comments/${commentId}/reactions`,
      method: 'post',
      body: data
    });
  }

  /**
   * Удалить реакцию к комментарию
   */
  removeCommentReaction(episodeId: string, commentId: string): Promise<void> {
    return this.call<never, void>({
      path: `episodes/${episodeId}/comments/${commentId}/reactions`,
      method: 'delete'
    });
  }

  /**
   * Получить мою реакцию к комментарию
   */
  getMyCommentReaction(
    episodeId: string,
    commentId: string
  ): Promise<CommentReaction> {
    return this.call<never, CommentReaction>({
      path: `episodes/${episodeId}/comments/${commentId}/reactions/my`,
      method: 'get'
    });
  }

  /**
   * Получить статистику комментария
   */
  getCommentStats(episodeId: string, commentId: string): Promise<CommentStats> {
    return this.call<never, CommentStats>({
      path: `episodes/${episodeId}/comments/${commentId}/stats`,
      method: 'get'
    });
  }
}

export const episodeApi = new EpisodeApi();
