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
          {!isLogin && 
          <div>
            <a href="/" style={{ textDecoration: "none" }}>About</a>
            <a href="/login" style={{ textDecoration: "none" }}>Log In</a>
            <a href="/registration" style={{ textDecoration: "none" }}>Sign Up</a>
          </div>}
        </div>
      </div> 
    </div>
      
  )
}

export default Navbar