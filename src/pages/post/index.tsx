import dayjs from 'dayjs';
import React from 'react';
import { useParams } from 'react-router-dom';
import { APODImageDataType, GetAPODImages } from '../../api/getAPOD';
import { useApiFetch } from '../../api/useApiFetch';
import Header from '../../components/Header';
import LoadingContent from '../../components/LoadingContent';
import {
  CardButton,
  CardDate,
} from '../../components/PostCard/PostCard.styled';
import TruncatingText from '../../components/TruncatingText';
import useLikeSystem from '../../hooks/useLikeSystem';
import getShareLink from '../../utils/getShareLink';
import {
  Image,
  PostButtons,
  PostContainer,
  PostPageContainer,
  PostSidePanel,
  PostTitle,
} from './PostPage.styled';

const PostPage: React.FC = () => {
  const { date } = useParams();
  const { status, data } = useApiFetch<APODImageDataType>(
    GetAPODImages({ date })
  );
  const { likes, likeImage, unlikeImage } = useLikeSystem();

  const onLikeClick = () => {
    if (date) {
      if (likes.includes(date)) {
        unlikeImage(date);
      } else {
        likeImage(date);
      }
    }
  };

  return (
    <PostPageContainer>
      <Header showFilterButton={false} />
      <LoadingContent queryStatus={status} noDataCondition={!data}>
        {data && (
          <PostContainer>
            <Image src={data.url} />
            <PostSidePanel>
              <PostTitle>{data.title}</PostTitle>
              <CardDate>{dayjs(date).format('MMMM D YYYY')}</CardDate>
              <TruncatingText maxLength={200}>
                {data.explanation}
              </TruncatingText>
              <PostButtons>
                <CardButton onClick={onLikeClick} type="button">
                  {date && likes.includes(date) ? 'Unlike' : 'Like'}
                </CardButton>
                <CardButton
                  type="button"
                  onClick={() => getShareLink(data.date)}
                >
                  Share
                </CardButton>
              </PostButtons>
            </PostSidePanel>
          </PostContainer>
        )}
      </LoadingContent>
    </PostPageContainer>
  );
};

export default PostPage;
