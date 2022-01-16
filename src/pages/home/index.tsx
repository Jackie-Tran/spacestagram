import dayjs from 'dayjs';
import React, { useState } from 'react';
import { GetAPODImages, APODImageDataType } from '../../api/getAPOD';
import { useApiFetch } from '../../api/useApiFetch';
import Header from '../../components/Header';
import LoadingContent from '../../components/LoadingContent';
import PostCard from '../../components/PostCard';
import FiltersContext from '../../context/FiltersContext';
import { CardContainer, HomePageContainer } from './HomePage.styled';

const HomePage: React.FC = () => {
  // Filters
  const [startDate, setStartDate] = useState<string>(
    dayjs(new Date()).format('YYYY-MM-DD')
  );
  const [endDate, setEndDate] = useState<string>(
    dayjs(new Date()).format('YYYY-MM-DD')
  );

  const { status, data } = useApiFetch<APODImageDataType[]>(
    GetAPODImages({ startDate, endDate })
  );

  return (
    <FiltersContext.Provider
      value={{
        startDate,
        endDate,
        setStartDate,
        setEndDate,
      }}
    >
      <HomePageContainer>
        <Header />
        <LoadingContent
          queryStatus={status}
          noDataCondition={data !== undefined && data.length <= 0}
        >
          <CardContainer>
            {data?.map(item => (
              <PostCard key={item.title} {...item} />
            ))}
          </CardContainer>
        </LoadingContent>
      </HomePageContainer>
    </FiltersContext.Provider>
  );
};

export default HomePage;
