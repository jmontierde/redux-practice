import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { increment } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  console.log("copunt", count);

  const dispatch = useDispatch();

  return (
    <div>
      {count}

      <Button onClick={() => dispatch(increment())}>Click me</Button>
    </div>
  );
};

export default Counter;
