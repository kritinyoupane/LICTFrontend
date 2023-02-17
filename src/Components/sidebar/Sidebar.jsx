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
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../../images/re.jpeg";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
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
            <h3>John Doe</h3>
          </span>
          <p className="identity">Admin</p>
        </div>
        <hr/>
        <div className="center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon"/>
              <span>Dashboard</span>
            </li>
          </Link>
          <li>
            <ArrowDropDownOutlinedIcon className="icon"/>
            <span>Model Selection</span>
          </li>
          <Link to="/notification" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsActiveOutlinedIcon className="icon"/>
              <span>Notification</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <li>
            <UploadFileOutlinedIcon className="icon"/>
            <span>Upload</span>
          </li>
          <Link to="/single" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon"/>
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <LogoutOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </div>
        <div className="bottom">
          <li>
            <Brightness5Icon className ="coloroptions" onClick={()=>dispatch({type: "LIGHT"})}/>
          </li>
          <li>
            <DarkModeIcon className ="coloroptions"onClick={()=>dispatch({type: "DARK"})}/>
          </li>
        </div>
    </div>
  )
}

export default Sidebar