import React from 'react';
import {
  HeaderContainer,
  Subtitle,
  TextContainer,
  Title,
} from './Header.styled';

const Header: React.FC = () => (
  <HeaderContainer>
    <TextContainer>
      <Title>Spacestagram</Title>
      <Subtitle>Image sharing from the final frontier</Subtitle>
    </TextContainer>
  </HeaderContainer>
);

export default Header;
