import React from 'react';
import useColorMode from '../../hooks/useColorMode';
import ToggleContainer from './ColorModeToggle.styled';

const ColorModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const onClick = () => {
    toggleColorMode();
  };

  return (
    <ToggleContainer onClick={onClick}>
      {colorMode === 'light' ? '🌙' : '☀️'}
    </ToggleContainer>
  );
};

export default ColorModeToggle;
