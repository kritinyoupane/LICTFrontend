import "../login/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axiosInstance from "../../helper/Axios";
import AuthContext from "../../context/AuthContext";
import {userInfoTransform} from "../../helper/dataTransform"
import Navbar from "../../Components/navbar/Navbar";
import { AiOutlineFile } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {setUserInfo} = useContext(AuthContext)
  const navigate = useNavigate()
  const [redirectLink, setRedirectLink] = useState("/notification")

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
    console.log("hello", username, password)
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
  return(
    <div>
      <div className="decor">
            <obj1></obj1>
            <obj2></obj2>
            <obj3></obj3>
            <obj4></obj4>
            <obj5></obj5>
          </div>
          <div className='loginBox'>
            <div className='loginSection'>
              <div className='topic'>
                Login
              </div>
              <div className='loginDetails'>
                <div className='heading'>
                  Username
                </div>
                <input className='inputSection' id='name' type='name' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}>  
                </input>

                <div className='heading'>
                  Password
                </div>
                <input className='inputSection'id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}>  
                </input>
              </div>
              <div className='buttons'>
                <button className='login' onClick={handleLogin}>Login</button>
                <button className="signin" >Signup</button>
              </div>
            </div>
            <div className='section'>
            <div className='logoSection'>
            <AiOutlineFile className="file" size={100}/>
            <FaSearch className="searching" size={30}/>
            </div>
            <div className='title'>
              Q Similarity
            </div><br></br>
            <div className='quote'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, architecto placeat ipsa hic accusamus dignissimos ipsum consequuntur quo, aliquid nam ducimus delectus atque ipsam facilis non beatae magni culpa laudantium!
            </div>
            </div>
            </div>
    </div>
  )

}

export default Login;