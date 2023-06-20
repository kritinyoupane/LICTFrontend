import React, { useEffect, useState } from 'react'
import "../list/List.scss"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Datatable from '../../Components/datatable/Datatable'
import { userColumns } from "../../datatablesource"
import axiosInstance from '../../helper/Axios'


const List = () => {
  const[ userRows, setUserRows] = useState([])
  const fetchUsers = async () => {
    const response = await axiosInstance.get('/auth/viewUsers')
    if (response.statusText === "OK") {
      const filteredUser = response.data.filter(x => !x.is_superuser)
      const data = filteredUser.map((x) => {
        const { id, username, email, approvalStatus } = x;
        return {
          id,
          username,
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          status: approvalStatus,
          email,
          checkindate: "TODO",
          checkintime: "TODO",
          checkoutdate: "TODO",
          checkouttime: "TODO",
        };
      });
      setUserRows(data)
      console.log(response.data);
    }
  }
  useEffect(() => {
    fetchUsers()
  }, []);
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
          <Datatable userColumns={userColumns} userRows={userRows} refreshList={fetchUsers}/>
      </div>
    </div>
  )
}

export default List