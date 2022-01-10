import axios from 'axios';
import { ApiFetchParams } from './useApiFetch';

export type CameraType = {
  full_name: string;
  id: number;
  name: string;
  rover_id: number;
};

export type RoverType = {
  id: number;
  landing_date: string;
  launch_date: string;
  name: string;
  status: string;
};

export type RoverImageDataType = {
  camera: CameraType;
  earth_date: string;
  id: number;
  img_src: string;
  rover: RoverType;
  sol: number;
};

export const FetchRoverImages: ApiFetchParams = {
  query: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
  params: {
    sol: 1000,
    page: 1,
  },
  payload: {},
  responseTransformer: res => res.data.photos,
};

const fetchRoverImages = async (): Promise<RoverImageDataType[]> => {
  try {
    const res = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    );
    return res.data.photos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchRoverImages;
