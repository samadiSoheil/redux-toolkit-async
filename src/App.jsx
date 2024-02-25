import "./App.css";
import { Provider } from "react-redux";
import { myStore } from "./features/store";
import Cake from "./components/Cake";
import User from "./components/User";

function App() {
  return (
    <Provider store={myStore}>
      <Cake />
      <User />
    </Provider>
  );
}

export default App;
