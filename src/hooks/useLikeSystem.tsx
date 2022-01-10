import { useEffect, useState } from 'react';

const useLikeSystem = () => {
  const [likes, setLikes] = useState<number[]>([]);

  const likeImage = (id: number) => {
    setLikes([...likes, id]);
  };
  const unlikeImage = (id: number) => {
    setLikes(likes.filter(i => i !== id));
  };

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  return { likes, likeImage, unlikeImage };
};

export default useLikeSystem;
