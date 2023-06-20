import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../helper/Axios';
import Navbar from "../../Components/navbar/Navbar";
import "../registration/Registration.scss";
import { AiOutlineFile } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

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




  return(<div>
    <div className="decor">
            <obj1></obj1>
            <obj2></obj2>
            <obj3></obj3>
            <obj4></obj4>
            <obj5></obj5>
          </div>
          <div className='loginBox'>
            <div className='regSection'>
              <div className='regTopic'>
                Signup
              </div>
              <div className='loginDetailsReg'>
                <div className='name'>
                <div className='heading'>
                  Firstname
                </div>
                <input className='inputSection' id='fname' type='name' placeholder='Firstname'>  
                </input>
                <div className='heading'>
                  Lastname
                </div>
                <input className='inputSection' id='lname' type='name' placeholder='Lastname'>  
                </input>
                </div>
                <div className='heading'>
                  Username
                </div>
                <input className='inputSection' id='name' type='name' placeholder='Username'>  
                </input>
                <div className='heading'>
                  Email
                </div>
                <input className='inputSection' id='email' type='email' placeholder='email'>  
                </input>
                <div className='heading'>
                  Password
                </div>
                <input className='inputSection'id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}>  
                </input>
                <div className='heading'>
                  Confirm password
                </div>
                <input className='inputSection'id='password2' type='password' value={password2} onChange={(e) => setPassword(e.target.value)}>  
                </input>
              </div>
              <div className='buttons'>
                <button className='login'>Login</button>
                <button className="signin">Signup</button>
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
  </div>)






  return (
    <div className="registration">
      <Navbar/>
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