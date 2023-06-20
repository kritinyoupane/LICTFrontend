import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import Datatable from "../../Components/datatable/Datatable"
import "../notification/Notification.scss"
import { userRows,userColumns } from "../../datatablesource"

const Notification = () => {
  const filterRows = userRows.filter((row)=>row.status==="pending");
  return (
    <div className='notification'>
        <Sidebar/>
        < div className='notificationContainer'>
            <Navbar/>
            <Datatable userColumns={userColumns} userRows={filterRows}/>            
        </div>         
    </div>
  )
}

export default Notification