import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import Chart from "../../Components/charts/Chart";
import Featured from "../../Components/featured/Featured";
import "./Home.scss"

const Home = () => {
  return (
    <div className ="home">
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Check In)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  )
}

export default Home