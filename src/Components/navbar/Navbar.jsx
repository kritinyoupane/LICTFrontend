import "./Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <input type="text" placeholder="Search..." className="search" />
        <SearchOutlinedIcon className="search"/>
        <span>
          <HomeIcon className="icon"/>
        </span>
        <span>
            <SettingsOutlinedIcon className="icon"/>
        </span>
      </div>
    </div>
      
  )
}

export default Navbar