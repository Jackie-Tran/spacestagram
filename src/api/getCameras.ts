import { ApiFetchParams } from './useApiFetch';

export type CameraOptionsType = Record<string, string>;

export const GetRoverCameras: ApiFetchParams<CameraOptionsType> = {
  query: 'https://api.nasa.gov/mars-photos/api/v1/rovers',
  params: {},
  payload: {},
  responseTransformer: res => {
    let cameras = res.data.rovers.map((data: any) =>
      data.cameras.map((camera: any) => camera.name)
    );
    cameras = cameras.flat();
    cameras.filter((item: any, pos: any) => cameras.indexOf(item) === pos);
    return cameras.reduce(
      (obj: any, item: any) => Object.assign(obj, { [item]: item }),
      {}
    );
  },
};
