import React from 'react';
import dayjs from 'dayjs';
import { APODImageDataType } from '../../api/getAPOD';
import {
  CardContent,
  CardDate,
  CardImage,
  CardTitle,
  LikeButton,
  PostCardContainer,
  TextSection,
} from './PostCard.styled';
import useLikeSystem from '../../hooks/useLikeSystem';
import TruncatingText from '../TruncatingText';

const PostCard: React.FC<APODImageDataType> = ({
  title,
  date,
  url,
  explanation,
}) => {
  const { likes, likeImage, unlikeImage } = useLikeSystem();

  const onLikeClick = () => {
    if (likes.includes(date)) {
      unlikeImage(date);
    } else {
      likeImage(date);
    }
  };

  return (
    <PostCardContainer>
      <CardImage src={url} />
      <CardContent>
        <TextSection>
          <CardTitle>{title}</CardTitle>
          <CardDate>{dayjs(date).format('MMMM D YYYY')}</CardDate>
          <TruncatingText>{explanation}</TruncatingText>
        </TextSection>
        <LikeButton onClick={onLikeClick} type="button">
          {likes.includes(date) ? 'Unlike' : 'Like'}
        </LikeButton>
      </CardContent>
    </PostCardContainer>
  );
};

export default PostCard;
