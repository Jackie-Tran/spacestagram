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
  const [captureDate, setCaptureDate] = useState<string>(
    dayjs(new Date()).format('YYYY-MM-DD')
  );
  const [rover, setRover] = useState<string>('curiosity');
  const [camera, setCamera] = useState<string>('FHAZ');

  const { status, data } = useApiFetch<APODImageDataType[]>(GetAPODImages());

  return (
    <FiltersContext.Provider
      value={{
        captureDate,
        rover,
        camera,
        setCaptureDate,
        setRover,
        setCamera,
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
