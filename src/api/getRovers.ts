import { ApiFetchParams } from './useApiFetch';

export type RoverOptionsType = Record<string, string>;

export const GetRoverOptions: ApiFetchParams<RoverOptionsType> = {
  query: 'https://api.nasa.gov/mars-photos/api/v1/rovers',
  params: {},
  payload: {},
  responseTransformer: res =>
    res.data.rovers.reduce(
      (obj: any, item: any) => Object.assign(obj, { [item.name]: item.name }),
      {}
    ),
};
