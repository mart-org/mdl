import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState<number>(0);
  const add = (num: number) => {
    setCount(count + num);
  };
  const sudstract = (num: number) => {
    setCount(count - num);
  };

  return { count, add, sudstract };
};
