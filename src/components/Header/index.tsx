import React, { useContext } from 'react';
import FiltersContext from '../../context/FiltersContext';
import FilterMenu from '../FilterMenu';
import FilterOption from '../FilterMenu/FilterOption';
import { HeaderContainer, TextContainer, Title } from './Header.styled';

const Header: React.FC = () => {
  const { startDate, setStartDate, endDate, setEndDate } =
    useContext(FiltersContext);

  return (
    <HeaderContainer>
      <TextContainer>
        <Title>Spacestagram</Title>
      </TextContainer>
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
    </HeaderContainer>
  );
};

export default Header;
