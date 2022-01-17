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
  startDate?: string;
  endDate?: string;
  date?: string;
};

const buildParams = (params: any) =>
  Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== undefined)
  );

export const GetAPODImages = <DataType>({
  startDate,
  endDate,
  date,
}: APODImagesQueryOptions): ApiFetchParams<DataType> => ({
  query: `https://api.nasa.gov/planetary/apod`,
  params: buildParams({
    start_date: startDate,
    end_date: endDate,
    date,
  }),
  payload: {},
  responseTransformer: res => res.data,
});
