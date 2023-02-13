import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import "./Home.scss"

const Home = () => {
  return (
    <div className ="home">
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        homecontainer
      </div>
    </div>
  )
}

export default Home