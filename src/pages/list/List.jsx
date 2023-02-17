import React from 'react'
import "../list/List.scss"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Datatable from '../../Components/datatable/Datatable'
import { userRows,userColumns } from "../../datatablesource"


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
          <Datatable userColumns={userColumns} userRows={userRows}/>
      </div>
    </div>
  )
}

export default List