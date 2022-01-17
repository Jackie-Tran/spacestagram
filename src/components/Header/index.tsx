import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import FiltersContext from '../../context/FiltersContext';
import FilterMenu from '../FilterMenu';
import FilterOption from '../FilterMenu/FilterOption';
import {
  HeaderContainer,
  Subtitle,
  TextContainer,
  Title,
} from './Header.styled';

const Header: React.FC<{ showFilterButton: boolean }> = ({
  showFilterButton,
}) => {
  const { startDate, setStartDate, endDate, setEndDate } =
    useContext(FiltersContext);

  const showSubtitle = useMediaQuery({ query: '(min-width: 500px)' });

  return (
    <HeaderContainer>
      <TextContainer>
        <Title to="/">Spacestagram</Title>
        {showSubtitle && (
          <Subtitle>Image sharing from the final frontier</Subtitle>
        )}
      </TextContainer>
      {showFilterButton && (
        <FilterMenu>
          <FilterOption
            inputType="date"
            filterName="Start Date"
            currentFilter={startDate}
            setFilter={setStartDate}
          />
          <FilterOption
            inputType="date"
            filterName="End Date"
            currentFilter={endDate}
            setFilter={setEndDate}
          />
        </FilterMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
