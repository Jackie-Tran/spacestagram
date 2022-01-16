import { ApiFetchParams } from './useApiFetch';

export type APODImageDataType = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  mediaType: string;
  title: string;
  url: string;
};

const buildParams = (params: any) =>
  Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== '')
  );

export const GetAPODImages = (): ApiFetchParams<APODImageDataType[]> => ({
  query: `https://api.nasa.gov/planetary/apod`,
  params: buildParams({
    start_date: '2022-1-16',
    end_date: '2022-1-16',
  }),
  payload: {},
  responseTransformer: res => res.data,
});
