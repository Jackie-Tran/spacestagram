import { useContext, useEffect } from 'react';
import LikesContext from '../context/LikesContext';

const useLikeSystem = () => {
  const { likes, setLikes } = useContext(LikesContext);

  const likeImage = (id: number) => {
    setLikes([...likes, id]);
    localStorage.setItem('likes', JSON.stringify([...likes, id]));
  };
  const unlikeImage = (id: number) => {
    setLikes(likes.filter(i => i !== id));
    localStorage.setItem('likes', JSON.stringify(likes.filter(i => i !== id)));
  };

  useEffect(() => {
    const storedLikes = localStorage.getItem('likes');
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    } else {
      setLikes([]);
    }
  }, []);

  return { likes, likeImage, unlikeImage };
};

export default useLikeSystem;
