import React, { useState, useEffect } from "react";

const useTimeout = (duration?: number) => {
  const [isOpened, setIsOpened] = useState(true);

  useEffect(() => {
    if (duration) {
      const timeoutId = setTimeout(() => {
        setIsOpened(false);
      }, duration);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return { isOpened, setIsOpened };
};

export default useTimeout;
