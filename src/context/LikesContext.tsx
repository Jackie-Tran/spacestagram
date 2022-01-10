import { createContext, Dispatch, SetStateAction } from 'react';

type LikesContextType = {
  likes: number[];
  setLikes: Dispatch<SetStateAction<number[]>>;
};

const LikesContext = createContext<LikesContextType>({
  likes: [],
  setLikes: () => {},
});

export default LikesContext;
