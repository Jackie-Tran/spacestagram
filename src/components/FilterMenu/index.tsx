import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  FilterButton,
  FilterIconButton,
  FilterWrapper,
  MenuContainer,
  MenuTitle,
} from './FilterMenu.styled';
import FilterIcon from '../../images/filters-icon.svg';

const FilterMenu: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <FilterWrapper>
      {isMobile ? (
        <FilterIconButton onClick={toggleMenu} ref={buttonRef}>
          <img src={FilterIcon} alt="filters" />
        </FilterIconButton>
      ) : (
        <FilterButton onClick={toggleMenu} ref={buttonRef}>
          Filters
        </FilterButton>
      )}
      {isOpen && (
        <MenuContainer ref={menuRef}>
          <MenuTitle>Filters</MenuTitle>
          {children}
        </MenuContainer>
      )}
    </FilterWrapper>
  );
};

export default FilterMenu;
