/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  FilterButton,
  FilterWrapper,
  MenuContainer,
  MenuTitle,
} from './FilterMenu.styled';

const roverOptions = {
  Curiosity: 'curiosity',
  Spirit: 'spirit',
  Opportunity: 'opportunity',
  Perseverance: 'perseverance',
};

const FilterMenu: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <FilterWrapper>
      <FilterButton onClick={toggleMenu} type="button">
        Filters
      </FilterButton>
      {isOpen && (
        <MenuContainer>
          <MenuTitle>Filters</MenuTitle>
          {children}
        </MenuContainer>
      )}
    </FilterWrapper>
  );
};

export default FilterMenu;
