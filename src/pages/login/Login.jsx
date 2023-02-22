import "../login/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axiosInstance from "../../helper/Axios";
import AuthContext from "../../context/AuthContext";
import {userInfoTransform} from "../../helper/dataTransform"
import Navbar from "../../Components/navbar/Navbar";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {setUserInfo} = useContext(AuthContext)
  const navigate = useNavigate()
  const [redirectLink, setRedirectLink] = useState("/home")

  useEffect(()=>{
    const href = window.location.href;
    const redirectValue = href.split("redirect_to=")[1]
    if(redirectValue){
      setError("* Access Denied. Login first.")
      setRedirectLink("/" + redirectValue);
    }
  }, [])

  const handleLogin = async(e) => {
    e.preventDefault();
    if (username.trim() && password) {
      const body = { username: username.trim(), password };
      const response = await axiosInstance.post("/auth/login", body);
      if (response.statusText === "OK") {
        const { data} = response
        if(data.LoginStatus === "Can not login"){
          setError("* Invalid Username or Password")
        }else{
          setUserInfo(userInfoTransform(data));
          navigate(redirectLink);
        }
      }
    }
  }

  return (
    <div className="login">
      <Navbar/>
      <div className="loginContainer">
        <div className="top">
          <h1>Admin pannel</h1>
        </div>
        <hr>
        </hr>
          <div className="bottom">
            <form>
              {error}
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="john_doe" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button onClick={handleLogin}>Log In</button>
              <span> Or </span>
              <Link to="/registration" style={{ textDecoration: "none" }}>
              <button>Sign Up</button>
              </Link>
            </form> 
          </div>
        </div>
      </div>
  )
}

export default Login;