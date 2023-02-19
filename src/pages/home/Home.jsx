import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import Chart from "../../Components/charts/Chart";
import Featured from "../../Components/featured/Featured";
import "./Home.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Home = () => {
  const {userInfo} = useContext(AuthContext);
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="charts">
          {!userInfo && (
            <>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button>Log In</button>
              </Link>
              <span> Or </span>
              <Link to="/registration" style={{ textDecoration: "none" }}>
                <button>Sign Up</button>
              </Link>
            </>
          )}

          <Featured />
          <Chart title="Last 6 Months (Check In)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
