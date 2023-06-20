import "./Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react";

const Navbar = () => {
  const [isLogin,setLogin]=useState(false)

  return (
    <div className="navbar">
      <div className="navbarContent">
        <div className="wrapper">
          {isLogin && <input type="text" placeholder="Search..." className="search" />}
          {isLogin && <SearchOutlinedIcon className="search"/>}
          {isLogin && <span>
            <HomeIcon className="icon"/>
          </span>}
          {isLogin && 
          <span>
              <SettingsOutlinedIcon className="icon"/>
          </span>}
          {/* {!isLogin && 
          <div>
            <a href="/" className='navBtn'>About</a>
            <a href="/login" className='navBtn'>Log In</a>
            <a href="/registration" className='navBtn'>Sign Up</a>
          </div>} */}
        </div>
      </div> 
    </div>
      
  )
}

export default Navbar