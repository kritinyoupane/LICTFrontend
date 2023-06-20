import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../../images/re.jpeg";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axiosInstance from "../../helper/Axios";
import { AiOutlineFile } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const {clearUserInfo, userInfo} = useContext(AuthContext);
  const navigate = useNavigate()

  const logout = async () => {
    const response = await axiosInstance.post("/auth/logout");
    console.log(response)
    clearUserInfo();
    navigate("/")
  };

  
  return (
    <div className="sidebar">
        <div className="top">
            <ReactRoundedImage
                      image={MyPhoto}
                      roundedColor="#333"
                      imageWidth="80"
                      imageHeight="80"
                      roundedSize="0"
                      borderWidth ="3"
                      borderRadius="50%"/>
          <span className="identity">
            <h3>{userInfo && userInfo.userName? userInfo.userName : "Username"}</h3>
          </span>
          <p className="identity">{userInfo && userInfo.position ? userInfo.position : "Position"}</p>
        </div>
        <hr/>
        <div className="center">
          <Link to="/notification" style={{ textDecoration: "none" }} className='navigation'>
            <li>
              <NotificationsActiveOutlinedIcon className="icon"/>
              <span>User Request</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/editor" style={{ textDecoration: "none" }}>
            <li>
              <EventNoteIcon className="icon"/>
              <span>Editor</span>
            </li>
          </Link>
          <Link to="/viewer" style={{ textDecoration: "none" }}>
            <li>
              <EventNoteIcon className="icon"/>
              <span>Viewer</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
          <li>
            <UploadFileOutlinedIcon className="icon"/>
            <span>Settings</span>
          </li>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon"/>
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={logout}>
            <LogoutOutlinedIcon  className="icon"/>
            <span>Logout</span>
          </li>
          <logoSection>
          <AiOutlineFile className="file" size={100}/>
          <FaSearch className="searching" size={30}/>
          </logoSection>
        </div>
        {/* <div className="bottom">
          <li>
            <Brightness5Icon className ="coloroptions" onClick={()=>dispatch({type: "LIGHT"})}/>
          </li>
          <li>
            <DarkModeIcon className ="coloroptions"onClick={()=>dispatch({type: "DARK"})}/>
          </li>
        </div> */}
    </div>
  )
}

export default Sidebar