import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/userSlice";

export default function User() {
  const store = useSelector((data) => data.users);
  console.log(store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  if (store.loading && store.data) return <p>Loading..</p>;
  if (!store.loading && !store.data.length)
    return <h2 style={{ color: "red" }}>{store.error}</h2>;
  return (
    <div>
      <h1>this is a user!</h1>
      {store.data.map((i) => {
        return <li key={i.id}>{i.name}</li>;
      })}
    </div>
  );
}
