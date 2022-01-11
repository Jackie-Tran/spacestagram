import React from 'react';
import dayjs from 'dayjs';
import { RoverImageDataType } from '../../api/getRoverImages';
import {
  CardContent,
  CardText,
  CardTitle,
  PostCardContainer,
  RoverImage,
} from './PostCard.styled';
import useLikeSystem from '../../hooks/useLikeSystem';

const PostCard: React.FC<RoverImageDataType> = ({
  camera,
  earthDate,
  imgSrc,
  rover,
  id,
}) => {
  const { likes, likeImage, unlikeImage } = useLikeSystem();
  return (
    <PostCardContainer>
      <RoverImage src={imgSrc} />
      <CardContent>
        <CardTitle>{`${rover.name} - ${camera.fullName}`}</CardTitle>
        <CardText>{dayjs(earthDate).format('MMMM D YYYY')}</CardText>
        <button
          onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            likes.includes(id) ? unlikeImage(id) : likeImage(id);
          }}
          type="button"
        >
          {likes.includes(id) ? 'Unlike' : 'Like'}
        </button>
      </CardContent>
    </PostCardContainer>
  );
};

export default PostCard;
