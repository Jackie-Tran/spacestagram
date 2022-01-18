import React from 'react';
import { useParams } from 'react-router-dom';
import { APODImageDataType, GetAPODImages } from '../../api/getAPOD';
import { useApiFetch } from '../../context/useApiFetch';
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
import dateUtils from '../../utils/dateUtils';

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
          <PostContainer
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1,
              ease: 'easeOut',
            }}
          >
            <Image src={data.url} />
            <PostSidePanel>
              <PostTitle>{data.title}</PostTitle>
              {date && <CardDate>{dateUtils.formatDate(date)}</CardDate>}
              <TruncatingText maxLength={200}>
                {data.explanation}
              </TruncatingText>
              <PostButtons>
                <CardButton onClick={onLikeClick} type="button">
                  {date && likes.includes(date) ? 'Liked' : 'Like'}
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
