import Navbar from "../../Components/navbar/Navbar";
import "../registration/Registration.scss";

const Registration = () => {

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
                <input type="text" placeholder="John"/>
              </div>
              <div className="formInput">
              <label>Last Name</label>
              <input type="text" placeholder="Doe"/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="johndoe@gmail.com"/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" placeholder=""/>
              </div>
              <div className="formInput">
                <label>Confirm Password</label>
                <input type="password" placeholder=""/>
              </div>
              <button>Register</button>
            </form> 
          </div>
        </div>
      </div>
  )
}

export default Registration;