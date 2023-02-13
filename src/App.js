import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Neww from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
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
          <Route index element={<Home/>}/>
          <Route path ="login" element={<Login/>}/>
          <Route path ="users">
            <Route index element={<List/>}/>
            <Route path="new" element={<Neww/>}/>
            <Route path=":userId" element={<Single/>}/>
          </Route>
          <Route path ="products">
            <Route index element={<List/>}/>
            <Route path="new" element={<Neww/>}/>
            <Route path=":productId" element={<Single/>}/>
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
