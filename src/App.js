import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration"
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import Notification from "./pages/notification/Notification";
import "./style/dark.scss"
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import AccessDenied from "./pages/accessDenied/AccessDenied";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  useEffect(()=> console.log("............... only run once"),[])

  return (
    <div className = {darkMode? "app dark": "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Home/>}/>
          <Route path ="login" element={<Login/>}/>
          <Route path ="registration" element={<Registration/>}/>
          <Route path ="notification" element={<PrivateRoute onlyAdmin><Notification/></PrivateRoute>}/>
          <Route path ="users">
            <Route index element={<PrivateRoute><List/></PrivateRoute>}/>
            <Route path="new" element={<New/>}/>
            <Route path=":userId" element={<Single/>}/>
          </Route>
          <Route path="profile" element={<PrivateRoute><Single/></PrivateRoute>}/>
          <Route path ="products">
            <Route index element={<List/>}/>
            <Route path="new" element={<New/>}/>
            <Route path=":productId" element={<Single/>}/>
          </Route>
          </Route>
          <Route path="accessDenied" element={<AccessDenied />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
