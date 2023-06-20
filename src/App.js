import Home from "./pages/home/Home";
import About from "./pages/aboutus/About"
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration"
import New from "./pages/new/New";
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
import Editor from "./pages/editor/Editor";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings"
import Viewer from "./pages/viewer/Viewer";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  useEffect(()=> console.log("............... only run once"),[])

  return (
    <div className = {darkMode? "app dark": "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Login/>}/>
          <Route path ="login" element={<Login/>}/>
          <Route path ="home" element={<Home/>}/>
          <Route path ="registration" element={<Registration/>}/>
          <Route path ="notification" element={<PrivateRoute ><Notification/></PrivateRoute>}/>
          <Route path="settings" element={<PrivateRoute> <Settings /> </PrivateRoute>} />
          <Route path ="users">
            <Route index element={<PrivateRoute onlyAdmin={true}><List/></PrivateRoute>}/>
            <Route path="new" element={<New/>}/>
            <Route path=":userId" element={<PrivateRoute><Profile /></PrivateRoute> }/>
          </Route>
          <Route path="profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
          </Route>
          <Route path="accessDenied" element={<AccessDenied />}/>

          <Route path="editor" element={<Editor />}/>
          <Route path="viewer" element={<Viewer />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
