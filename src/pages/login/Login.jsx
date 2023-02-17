import "../login/Login.scss";
import { Link } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";


const Login = () => {

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
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="john_doe"/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" placeholder=""/>
              </div>
              <button>Log In</button>
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