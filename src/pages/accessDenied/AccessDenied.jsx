import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import Chart from "../../Components/charts/Chart";
import Featured from "../../Components/featured/Featured";
import "./AccessDenied.scss"
import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <h1>Access Denied</h1>
        <h2>Return to <Link to="/">Homepage</Link></h2>
        
      </div>
    </div>
  );
};

export default AccessDenied