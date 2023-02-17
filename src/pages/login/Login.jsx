import "../login/Login.scss";
import { Link } from "react-router-dom";


const Login = () => {

  return (
    <div className="login">
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