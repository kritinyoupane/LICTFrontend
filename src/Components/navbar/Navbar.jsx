import "./Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <input type="text" placeholder="Search..." className="search" />
        <SearchOutlinedIcon className="search"/>
        <li>
            <SettingsOutlinedIcon className="settingsIcon"/>
          </li>
      </div>
    </div>
      
  )
}

export default Navbar