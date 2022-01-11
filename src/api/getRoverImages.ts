import { ApiFetchParams } from './useApiFetch';

export type CameraType = {
  fullName: string;
  id: number;
  name: string;
  roverId: number;
};

export type RoverType = {
  id: number;
  landingDate: string;
  launchDate: string;
  name: string;
  status: string;
};

export type RoverImageDataType = {
  camera: CameraType;
  earthDate: string;
  id: number;
  imgSrc: string;
  rover: RoverType;
  sol: number;
};

export const GetRoverImages: ApiFetchParams<RoverImageDataType[]> = {
  query: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
  params: {
    sol: 1000,
    page: 1,
  },
  payload: {},
  responseTransformer: res =>
    res.data.photos.map((data: any) => ({
      camera: {
        id: data.camera.id,
        fullName: data.camera.full_name,
        name: data.camera.name,
        roverId: data.camera.rover_id,
      },
      earthDate: data.earth_date,
      id: data.id,
      imgSrc: data.img_src,
      rover: {
        id: data.rover.id,
        landingDate: data.rover.landing_date,
        launchDate: data.rover.launch_date,
        name: data.rover.name,
        status: data.rover.status,
      },
      sol: data.sol,
    })),
};
