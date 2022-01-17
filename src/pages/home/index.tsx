import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { GetAPODImages, APODImageDataType } from '../../api/getAPOD';
import { useApiFetch } from '../../api/useApiFetch';
import { MenuTitle } from '../../components/FilterMenu/FilterMenu.styled';
import {
  DatePicker,
  FilterOptionName,
  OptionsWrapper,
} from '../../components/FilterMenu/FilterOption/FilterOption.styled';
import Header from '../../components/Header';
import LoadingContent from '../../components/LoadingContent';
import PostCard from '../../components/PostCard';
import FiltersContext from '../../context/FiltersContext';
import useToastMessage from '../../hooks/useToastMessage';
import {
  CardContainer,
  FiltersContainer,
  HomePageContainer,
} from './HomePage.styled';

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
  const { showMessage } = useToastMessage();

  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  useEffect(() => {
    if (status === 'SUCCESS' && data && data?.length > 1) {
      showMessage(`Successfully fetched ${data.length} photos.`);
    }
  }, [status, data]);

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
        <Header showFilterButton={isMobile} />
        <CardContainer transition={{ staggerChildren: 1 }}>
          <LoadingContent
            queryStatus={status}
            noDataCondition={data !== undefined && data.length <= 0}
          >
            {data?.map(item => (
              <PostCard key={item.title} {...item} />
            ))}
          </LoadingContent>
        </CardContainer>
        {!isMobile && (
          <FiltersContainer>
            <MenuTitle>Filters</MenuTitle>
            <OptionsWrapper>
              <FilterOptionName>Start Date</FilterOptionName>
              <DatePicker
                type="date"
                name="start-date"
                max={dayjs(new Date()).format('YYYY-MM-DD')}
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                required
              />
            </OptionsWrapper>
            <OptionsWrapper>
              <FilterOptionName>End Date</FilterOptionName>
              <DatePicker
                type="date"
                name="end-date"
                max={dayjs(new Date()).format('YYYY-MM-DD')}
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                required
              />
            </OptionsWrapper>
          </FiltersContainer>
        )}
      </HomePageContainer>
    </FiltersContext.Provider>
  );
};

export default HomePage;
