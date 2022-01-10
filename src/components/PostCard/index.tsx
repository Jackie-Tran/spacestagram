import React, { useState } from 'react';
import dayjs from 'dayjs';
import { RoverImageDataType } from '../../api/fetchRoverImages';
import {
  CardContent,
  CardText,
  CardTitle,
  PostCardContainer,
  RoverImage,
} from './PostCard.styled';

const PostCard: React.FC<RoverImageDataType> = ({
  camera,
  earthDate,
  imgSrc,
  rover,
}) => {
  const [liked, setLiked] = useState<boolean>(false);
  return (
    <PostCardContainer>
      <RoverImage src={imgSrc} />
      <CardContent>
        <CardTitle>{`${rover.name} - ${camera.fullName}`}</CardTitle>
        <CardText>{dayjs(earthDate).format('MMMM D YYYY')}</CardText>
        <button
          onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            liked ? setLiked(false) : setLiked(true);
          }}
          type="button"
        >
          {liked ? 'Unlike' : 'Like'}
        </button>
      </CardContent>
    </PostCardContainer>
  );
};

export default PostCard;
