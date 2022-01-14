import React from 'react';
import dayjs from 'dayjs';
import { RoverImageDataType } from '../../api/getRoverImages';
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

const PostCard: React.FC<RoverImageDataType> = ({
  camera,
  earthDate,
  imgSrc,
  rover,
  id,
}) => {
  const { likes, likeImage, unlikeImage } = useLikeSystem();

  const onLikeClick = () => {
    if (likes.includes(id)) {
      unlikeImage(id);
    } else {
      likeImage(id);
    }
  };

  return (
    <PostCardContainer>
      <RoverImage src={imgSrc} />
      <CardContent>
        <TextSection>
          <CardTitle>{`${rover.name} - ${camera.fullName}`}</CardTitle>
          <CardText>{dayjs(earthDate).format('MMMM D YYYY')}</CardText>
        </TextSection>
        <LikeButton onClick={onLikeClick} type="button">
          {likes.includes(id) ? 'Unlike' : 'Like'}
        </LikeButton>
      </CardContent>
    </PostCardContainer>
  );
};

export default PostCard;
