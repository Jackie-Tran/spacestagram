import { createContext, Dispatch, SetStateAction } from 'react';

type FiltersContextType = {
  captureDate?: string;
  rover?: string;
  camera?: string;
  setCaptureDate: Dispatch<SetStateAction<string>>;
  setRover: Dispatch<SetStateAction<string>>;
  setCamera: Dispatch<SetStateAction<string>>;
};

const FiltersContext = createContext<FiltersContextType>({
  captureDate: '',
  rover: '',
  camera: '',
  setCaptureDate: () => {},
  setRover: () => {},
  setCamera: () => {},
});

export default FiltersContext;
