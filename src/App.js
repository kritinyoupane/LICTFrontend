import Home from "./pages/home/Home";
import About from "./pages/aboutus/About"
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration"
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import Notification from "./pages/notification/Notification";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className = {darkMode? "app dark": "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<About/>}/>
          <Route path ="login" element={<Login/>}/>
          <Route path ="home" element={<Home/>}/>
          <Route path ="registration" element={<Registration/>}/>
          <Route path ="notification" element={<Notification/>}/>
          <Route path ="users">
            <Route index element={<List/>}/>
            <Route path="new" element={<New/>}/>
            <Route path=":userId" element={<Single/>}/>
          </Route>
          <Route path="single" element={<Single/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
