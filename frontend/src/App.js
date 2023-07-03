import "./App.css";
import Register from "./component/Register";
import LogIn from "./component/LogIn";
import Home from "./component/Home";
import Error404 from "./component/Error404";
import Thanks from "./component/Thanks";
import CheckOrder from "./component/CheckOrder";
import DetailRestaurent from "./component/DetailRestaurent";
import ListRetaurent from "./component/ListRetaurent";
import CheckOut from "./component/CheckOut";

function App() {
  return (
    <div>
      {/* <Home/> */}
      <Register />
      <LogIn />
      {/* <ListRetaurent/> */}
      {/* <DetailRestaurent /> */}
      {/* <CheckOut /> */}
      {/* <Thanks /> */}
      {/* <CheckOrder/> */}
      {/* <Error404 /> */}
    </div>
  );
}

export default App;
