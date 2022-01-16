import { useContext, useEffect } from 'react';
import LikesContext from '../context/LikesContext';

const useLikeSystem = () => {
  const { likes, setLikes } = useContext(LikesContext);

  const likeImage = (date: string) => {
    setLikes([...likes, date]);
    localStorage.setItem('likes', JSON.stringify([...likes, date]));
  };
  const unlikeImage = (date: string) => {
    setLikes(likes.filter(i => i !== date));
    localStorage.setItem(
      'likes',
      JSON.stringify(likes.filter(i => i !== date))
    );
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
