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

export type APODImagesQueryOptions = {
  startDate: string;
  endDate: string;
};

const buildParams = (params: any) =>
  Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== '')
  );

export const GetAPODImages = ({
  startDate,
  endDate,
}: APODImagesQueryOptions): ApiFetchParams<APODImageDataType[]> => ({
  query: `https://api.nasa.gov/planetary/apod`,
  params: buildParams({
    start_date: startDate,
    end_date: endDate,
  }),
  payload: {},
  responseTransformer: res => res.data,
});
