import React from 'react';
import {
  FetchRoverImages,
  RoverImageDataType,
} from '../../api/fetchRoverImages';
import { useApiFetch } from '../../api/useApiFetch';
import Header from '../../components/Header';
import PostCard from '../../components/PostCard';
import { CardContainer, HomePageContainer } from './HomePage.styled';

const HomePage: React.FC = () => {
  const { status, data } = useApiFetch<RoverImageDataType[]>(FetchRoverImages);

  console.log(status, data);

  return (
    <HomePageContainer>
      <Header />
      <CardContainer>
        {data?.map(() => (
          <PostCard />
        ))}
      </CardContainer>
    </HomePageContainer>
  );
};

export default HomePage;
