import React from 'react';
import { CameraOptionsType, GetRoverCameras } from '../../api/getCameras';
import { GetRoverOptions, RoverOptionsType } from '../../api/getRovers';
import { useApiFetch } from '../../api/useApiFetch';
import FilterMenu from '../FilterMenu';
import FilterOption from '../FilterMenu/FilterOption';
import {
  HeaderContainer,
  Subtitle,
  TextContainer,
  Title,
} from './Header.styled';

const Header: React.FC = () => {
  const { data: rovers } = useApiFetch<RoverOptionsType>(GetRoverOptions);
  const { data: cameras } = useApiFetch<CameraOptionsType>(GetRoverCameras);
  console.log(cameras);
  return (
    <HeaderContainer>
      <TextContainer>
        <Title>Spacestagram</Title>
        <Subtitle>Image sharing from the final frontier</Subtitle>
      </TextContainer>
      <FilterMenu>
        <FilterOption filterName="Capture Date" />
        <FilterOption filterName="Rover" options={rovers} />
        <FilterOption filterName="Camera" options={cameras} />
      </FilterMenu>
    </HeaderContainer>
  );
};

export default Header;
