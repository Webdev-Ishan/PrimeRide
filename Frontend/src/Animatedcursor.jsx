import React, { useEffect } from 'react';

const AnimatedCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default AnimatedCursor;