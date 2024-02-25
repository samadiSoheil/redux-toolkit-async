import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../features/cakeSlice";

export default function Cake() {
  const store = useSelector((data) => data.cake);
  const dispatch = useDispatch();
  return (
    <>
      <h1>num of cake {store.numOfCake}</h1>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </>
  );
}
