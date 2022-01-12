import React, { useEffect, useRef, useState } from 'react';
import {
  FilterButton,
  FilterWrapper,
  MenuContainer,
  MenuTitle,
} from './FilterMenu.styled';

const FilterMenu: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
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
      <FilterButton onClick={toggleMenu} type="button">
        Filters
      </FilterButton>
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
