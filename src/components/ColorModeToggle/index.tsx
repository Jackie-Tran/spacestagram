import React, { useContext } from 'react';
import ColorModeContext from '../../context/ColorModeContext';
import ToggleContainer from './ColorModeToggle.styled';

const ColorModeToggle: React.FC = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  const onClick = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ToggleContainer onClick={onClick}>
      {colorMode === 'light' ? '🌙' : '☀️'}
    </ToggleContainer>
  );
};

export default ColorModeToggle;
