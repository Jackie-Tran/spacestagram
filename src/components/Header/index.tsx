import React, { useContext } from 'react';
import { CameraOptionsType, GetRoverCameras } from '../../api/getCameras';
import { GetRoverOptions, RoverOptionsType } from '../../api/getRovers';
import { useApiFetch } from '../../api/useApiFetch';
import FiltersContext from '../../context/FiltersContext';
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
  const { setCaptureDate, rover, setRover, camera, setCamera } =
    useContext(FiltersContext);

  return (
    <HeaderContainer>
      <TextContainer>
        <Title>Spacestagram</Title>
        <Subtitle>Image sharing from the final frontier</Subtitle>
      </TextContainer>
      <FilterMenu>
        <FilterOption filterName="Capture Date" setFilter={setCaptureDate} />
        <FilterOption
          filterName="Rover"
          options={rovers}
          currentFilter={rover}
          setFilter={setRover}
        />
        <FilterOption
          filterName="Camera"
          options={cameras}
          currentFilter={camera}
          setFilter={setCamera}
        />
      </FilterMenu>
    </HeaderContainer>
  );
};

export default Header;
