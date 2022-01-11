import React from 'react';
import { GetRoverImages, RoverImageDataType } from '../../api/getRoverImages';
import { useApiFetch } from '../../api/useApiFetch';
import Header from '../../components/Header';
import PostCard from '../../components/PostCard';
import { CardContainer, HomePageContainer } from './HomePage.styled';

const HomePage: React.FC = () => {
  const { status, data } = useApiFetch<RoverImageDataType[]>(GetRoverImages);

  console.log(status, data);

  return (
    <HomePageContainer>
      <Header />
      <CardContainer>
        {data?.map(item => (
          <PostCard key={item.id} {...item} />
        ))}
      </CardContainer>
    </HomePageContainer>
  );
};

export default HomePage;
