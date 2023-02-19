import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../helper/Axios';
import "../registration/Registration.scss";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate()

  const handleSubmit =async(e) => {
    e.preventDefault();
    if (password === password2) {
      const body = {
        first_name: firstName,
        last_name: lastName,
        username: userName,
        email,
        password,
        password2,
      };
      const response = await axiosInstance.post("/auth/register", body);
      if(response.statusText === "OK"){
        window.alert(response.data.message)
        navigate("/login")
      }
      console.log(response)
    }
  }


  return (
    <div className="registration">
      <div className="registrationContainer">
        <div className="top">
          <h1>Sign Up</h1>
          <h3> It's quick and easy </h3>
        </div>
        <hr>
        </hr>
          <div className="bottom">
            <form>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" placeholder="John" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
              </div>
              <div className="formInput">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
              </div>
              <div className="formInput">
              <label>User Name</label>
              <input type="text" placeholder="Doe" value={userName} onChange={(e)=>setUserName(e.target.value)} />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="johndoe@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" placeholder="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div className="formInput">
                <label>Confirm Password</label>
                <input type="password" placeholder="" value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
              </div>
              <button onClick={handleSubmit}>Register</button>
            </form> 
          </div>
        </div>
      </div>
  )
}

export default Registration;