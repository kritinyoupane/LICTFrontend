import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../../images/registration.jpg";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
            <ReactRoundedImage
                      image={MyPhoto}
                      roundedColor="#333"
                      imageWidth="60"
                      imageHeight="60"
                      roundedSize="5"
                      borderWidth ="5"
                      borderRadius="50"/>
          <span className="identity">Kriti Nyoupane</span>
          <p className="identity">Admin</p>
        </div>
        <hr/>
        <div className="center">
          <li>
          <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <li>
            <ArrowDropDownOutlinedIcon className="icon"/>
            <span>Model Selection</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon"/>
            <span>Notification</span>
          </li>
          <li>
            <PersonOutlineOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <UploadFileOutlinedIcon className="icon"/>
            <span>Upload</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon"/>
            <span>Settings</span>
          </li>
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