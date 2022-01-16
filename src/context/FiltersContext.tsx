import { createContext, Dispatch, SetStateAction } from 'react';

type FiltersContextType = {
  startDate: string;
  endDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
};

const FiltersContext = createContext<FiltersContextType>({
  startDate: '',
  endDate: '',
  setStartDate: () => {},
  setEndDate: () => {},
});

export default FiltersContext;
