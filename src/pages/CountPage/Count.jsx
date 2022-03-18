import useCount from "./useCount";
import { Button } from "antd";
export default function Count() {
  const [count, { inc, dec, reset }] = useCount();

  return (
    <>
      <div>{count}</div>
      <Button onClick={inc}>+1</Button>
      <Button onClick={reset}>0</Button>
      <Button onClick={dec}>-1</Button>
    </>
  );
}
