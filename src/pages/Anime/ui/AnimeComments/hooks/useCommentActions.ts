import { useState } from 'react';

import { episodeApi } from '@/api/episode.api';
import type { CreateEpisodeCommentDto } from '@/api/types/episode.types';
import { toast } from '@/shared/entities/toast';

const useCommentActions = () => {
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [likeSubmitting, setLikeSubmitting] = useState('');
  const [dislikeSubmitting, setDislikeSubmitting] = useState('');

  const handleSubmitComment = async (
    episodeId: string,
    comment: CreateEpisodeCommentDto
  ) => {
    try {
      setCommentSubmitting(true);
      await episodeApi.createEpisodeComment(episodeId, comment);
    } catch (err: unknown) {
      const error = err as Error;
      toast.error(error.message);
    } finally {
      setCommentSubmitting(false);
    }
  };

  const handleLikeComment = async (episodeId: string, commentId: string) => {
    try {
      setLikeSubmitting(commentId);
      await episodeApi.addCommentReaction(episodeId, commentId, {
        reaction_type: 'like'
      });
    } catch (err: unknown) {
      const error = err as Error;
      toast.error(error.message);
    } finally {
      setLikeSubmitting('');
    }
  };

  const handleDislikeComment = async (episodeId: string, commentId: string) => {
    try {
      setDislikeSubmitting(commentId);
      await episodeApi.addCommentReaction(episodeId, commentId, {
        reaction_type: 'dislike'
      });
    } catch (err: unknown) {
      const error = err as Error;
      toast.error(error.message);
    } finally {
      setDislikeSubmitting('');
    }
  };

  return {
    commentSubmitting,
    likeSubmitting,
    dislikeSubmitting,
    handleSubmitComment,
    handleLikeComment,
    handleDislikeComment
  };
};

export default useCommentActions;
