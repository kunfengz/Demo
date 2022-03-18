import { useState } from "react";

export default function useCount() {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, { inc, dec, reset }];
}
