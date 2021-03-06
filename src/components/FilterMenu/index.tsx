import React, { useEffect, useRef, useState } from 'react';
import {
  FilterIconButton,
  FilterIcon,
  FilterWrapper,
  MenuContainer,
  MenuTitle,
} from './FilterMenu.styled';

const FilterMenu: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      <FilterIconButton onClick={toggleMenu} ref={buttonRef}>
        <FilterIcon
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.25 9.375C26.25 7.30393 24.5711 5.625 22.5 5.625C20.4289 5.625 18.75 7.30393 18.75 9.375M26.25 9.375H18.75M26.25 9.375C26.25 11.4461 24.5711 13.125 22.5 13.125C20.4289 13.125 18.75 11.4461 18.75 9.375M26.25 9.375H37.5M18.75 9.375H7.5M30 22.5C30 24.5711 31.6789 26.25 33.75 26.25C35.8211 26.25 37.5 24.5711 37.5 22.5C37.5 20.4289 35.8211 18.75 33.75 18.75C31.6789 18.75 30 20.4289 30 22.5ZM30 22.5H7.5M15 35.625C15 33.5539 13.3211 31.875 11.25 31.875C9.17893 31.875 7.5 33.5539 7.5 35.625C7.5 37.6961 9.17893 39.375 11.25 39.375C13.3211 39.375 15 37.6961 15 35.625ZM15 35.625H37.5"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </FilterIcon>
      </FilterIconButton>
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
