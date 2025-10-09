import { Reply, Send, ThumbDown, ThumbUp } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { mockComments } from '../../mock-data';
import { animeCommentsStyles } from './AnimeComments.styles';

const AnimeComments = () => {
  const { t } = useTranslation();
  const [newComment, setNewComment] = useState('');
  const [comments] = useState(mockComments);

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      setNewComment('');
    }
  };

  const handleLike = (commentId: string) => {
    console.info('Like comment:', commentId);
  };

  const handleDislike = (commentId: string) => {
    console.info('Dislike comment:', commentId);
  };

  const handleReply = (commentId: string) => {
    console.info('Reply to comment:', commentId);
  };

  const getTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return t('anime_comments_just_now');
    if (diffInHours < 24)
      return t('anime_comments_hours_ago', { count: diffInHours });

    const diffInDays = Math.floor(diffInHours / 24);
    return t('anime_comments_days_ago', { count: diffInDays });
  };

  return (
    <Box sx={animeCommentsStyles.container}>
      {/* Заголовок секции */}
      <Typography variant="h5" sx={animeCommentsStyles.title}>
        {t('anime_comments_title')}
      </Typography>

      {/* Форма добавления комментария */}
      <Box sx={animeCommentsStyles.commentForm}>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Avatar sx={animeCommentsStyles.userAvatar}>U</Avatar>
          <Box sx={animeCommentsStyles.formContent}>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder={t('anime_comments_placeholder')}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              sx={animeCommentsStyles.textField}
              variant="outlined"
            />
            <Stack
              direction="row"
              spacing={2}
              sx={animeCommentsStyles.formActions}
            >
              <Button
                variant="contained"
                startIcon={<Send />}
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                sx={animeCommentsStyles.submitButton}
              >
                {t('anime_comments_submit')}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Divider sx={animeCommentsStyles.divider} />

      {/* Список комментариев */}
      <Box sx={animeCommentsStyles.commentsList}>
        {comments.map((comment) => (
          <Box key={comment.id} sx={animeCommentsStyles.commentItem}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Avatar sx={animeCommentsStyles.commentAvatar}>
                {comment.userName.charAt(0)}
              </Avatar>

              <Box sx={animeCommentsStyles.commentContent}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={animeCommentsStyles.commentHeader}
                >
                  <Typography
                    variant="subtitle2"
                    sx={animeCommentsStyles.userName}
                  >
                    {comment.userName}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={animeCommentsStyles.commentDate}
                  >
                    {getTimeAgo(comment.createdAt)}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  sx={animeCommentsStyles.commentText}
                >
                  {comment.content}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={animeCommentsStyles.commentActions}
                >
                  <IconButton
                    size="small"
                    onClick={() => handleLike(comment.id)}
                    sx={animeCommentsStyles.actionButton(comment.isLiked)}
                  >
                    <ThumbUp fontSize="small" />
                  </IconButton>
                  <Typography
                    variant="caption"
                    sx={animeCommentsStyles.likeCount}
                  >
                    {comment.likes}
                  </Typography>

                  <IconButton
                    size="small"
                    onClick={() => handleDislike(comment.id)}
                    sx={animeCommentsStyles.actionButton(comment.isDisliked)}
                  >
                    <ThumbDown fontSize="small" />
                  </IconButton>
                  <Typography
                    variant="caption"
                    sx={animeCommentsStyles.likeCount}
                  >
                    {comment.dislikes}
                  </Typography>

                  <IconButton
                    size="small"
                    onClick={() => handleReply(comment.id)}
                    sx={animeCommentsStyles.replyButton}
                  >
                    <Reply fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AnimeComments;
