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

export type RoverImageQueryOptions = {
  captureDate?: string;
  rover?: string;
  camera?: string;
};

const buildParams = (params: any) =>
  Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== '')
  );

export const GetRoverImages = ({
  captureDate,
  rover,
  camera,
}: RoverImageQueryOptions): ApiFetchParams<RoverImageDataType[]> => ({
  query: `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`,
  params: buildParams({
    page: 1,
    sol: 1000,
    captureDate,
    camera,
  }),
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
});
