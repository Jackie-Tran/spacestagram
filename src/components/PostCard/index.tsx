import React from 'react';
import { APODImageDataType } from '../../api/getAPOD';
import {
  ButtonContainer,
  CardButton,
  CardContent,
  CardDate,
  CardImage,
  CardTitle,
  PostCardContainer,
  TextSection,
} from './PostCard.styled';
import useLikeSystem from '../../hooks/useLikeSystem';
import TruncatingText from '../TruncatingText';
import getShareLink from '../../utils/getShareLink';
import useToastMessage from '../../hooks/useToastMessage';
import dateUtils from '../../utils/dateUtils';

const PostCard: React.FC<APODImageDataType> = ({
  title,
  date,
  url,
  explanation,
}) => {
  const { likes, likeImage, unlikeImage } = useLikeSystem();
  const { showMessage } = useToastMessage();

  const onLikeClick = () => {
    if (likes.includes(date)) {
      unlikeImage(date);
    } else {
      likeImage(date);
    }
  };

  const onShareClick = () => {
    getShareLink(date);
    showMessage('Link copied to clipboard!', 'info');
  };

  return (
    <PostCardContainer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
    >
      <CardImage src={url} />
      <CardContent>
        <TextSection>
          <CardTitle>{title}</CardTitle>
          <CardDate>{dateUtils.formatDate(date)}</CardDate>
          <TruncatingText>{explanation}</TruncatingText>
        </TextSection>
        <ButtonContainer>
          <CardButton onClick={onLikeClick} type="button">
            {likes.includes(date) ? 'Liked' : 'Like'}
          </CardButton>
          <CardButton onClick={onShareClick} type="button">
            Share
          </CardButton>
        </ButtonContainer>
      </CardContent>
    </PostCardContainer>
  );
};

export default PostCard;
