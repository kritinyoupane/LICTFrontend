import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import Datatable from "../../Components/datatable/Datatable"
import "../notification/Notification.scss"

const Notification = () => {
  return (
    <div className='notification'>
        <Sidebar/>
        < div className='notificationContainer'>
            <Navbar/>
            <Datatable/>            
        </div>         
    </div>
  )
}

export default Notification