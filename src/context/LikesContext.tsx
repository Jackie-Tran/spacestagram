import { createContext, Dispatch, SetStateAction } from 'react';

type LikesContextType = {
  likes: string[];
  setLikes: Dispatch<SetStateAction<string[]>>;
};

const LikesContext = createContext<LikesContextType>({
  likes: [],
  setLikes: () => {},
});

export default LikesContext;
