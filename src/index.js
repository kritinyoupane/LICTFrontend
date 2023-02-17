import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import useLocalStorage from "./hooks/useLocalStorage";
import axiosInstance from "./helper/Axios";
import { clearLoginToken } from "./helper/loginHelper";

const handleLogout = async () => {
  // const response = await axiosInstance.post("/auth/login",{username:"Gaurav", password: "hello123"});
  const response = await axiosInstance.post("/auth/logout");
  // const response = await axiosInstance.post("api/queryQuestion/", {
  //   queryQuestion: "asfasf as;lkjf;oasj f;lkasj f",
  // });
  if(response.status === 200){
    clearLoginToken()
  }
  console.clear();
  console.log("------", response.data);
};

const Test = () => {
  const [token, setToken] = useLocalStorage("token", "");
  const [user, setUser] = useLocalStorage("user", "");
  useEffect(() => {
    (async () => {
      // const response = await axiosInstance.post("/auth/login",{username:"Gaurav", password: "hello123"});
      const formData = new FormData();
      formData.append("username", "Gaurav");
      formData.append("password", "hello123");
      const response = await axiosInstance.post("/auth/login", formData);
      // const response = await axiosInstance.get("/")
      // const response = await axiosInstance.post("api/queryQuestion/", {
      //   queryQuestion: "asfasf as;lkjf;oasj f;lkasj f",
      // });
      console.clear();
      console.log("------", response);
      if (response.status === 200) {
        setToken(response.data.Token);
        setUser(response.data.user);
      }
    })();
  }, []);
  return (
    <div>
      Test {token}
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <Test />
    </DarkModeContextProvider>
  </React.StrictMode>
);
