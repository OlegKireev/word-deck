import { useEffect, useState } from 'react';

const getOrientation = () => {
  return window.innerHeight > window.innerWidth;
};

export const useOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(getOrientation());

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(getOrientation());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isPortrait;
};
