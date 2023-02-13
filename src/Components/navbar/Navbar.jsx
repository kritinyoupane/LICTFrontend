import "./Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <input type="text" placeholder="Search..." className="search" />
        <SearchOutlinedIcon className="search"/>
      </div>
    </div>
      
  )
}

export default Navbar