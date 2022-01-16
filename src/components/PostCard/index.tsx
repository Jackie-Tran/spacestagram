import React from 'react';
import dayjs from 'dayjs';
import { APODImageDataType } from '../../api/getAPOD';
import {
  CardContent,
  CardText,
  CardTitle,
  LikeButton,
  PostCardContainer,
  RoverImage,
  TextSection,
} from './PostCard.styled';
import useLikeSystem from '../../hooks/useLikeSystem';

const PostCard: React.FC<APODImageDataType> = ({ title, date, url }) => {
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
      <RoverImage src={url} />
      <CardContent>
        <TextSection>
          <CardTitle>{title}</CardTitle>
          <CardText>{dayjs(date).format('MMMM D YYYY')}</CardText>
        </TextSection>
        <LikeButton onClick={onLikeClick} type="button">
          {likes.includes(date) ? 'Unlike' : 'Like'}
        </LikeButton>
      </CardContent>
    </PostCardContainer>
  );
};

export default PostCard;
