import "../datatable/Datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../helper/Axios";
const Datatable = ({userColumns,userRows, refreshList}) => {
  const approveOrReject = async( id, toApprove) => {
    let endpoint = "/auth/approveUser";
    if(!toApprove){
      endpoint = "/auth/rejectUser";
    }

    const res = await axiosInstance.post(endpoint, {id})
    if(res.statusText === "OK"){
      refreshList();
    }
    console.log(res);
  }
  
  const navigate = useNavigate()
    const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell:(data) => {
        const {id} = data
        return(
          <div className="cellAction">
            <button className="approveButton" onClick={()=>approveOrReject(id, true)}> Approve </button>
            <button className="rejectButton" onClick={()=>approveOrReject(id, false)} > Reject </button>
            <button className="approveButton" onClick={()=>navigate(`/users/${id}`)} > View </button>
          </div>
        )
      }
    }
    ]
    const handleRowClick = (row)=>{
      console.log(row.id)
      // navigate(`/users/${row.id}`)
      
    }
    return (
        <div className="datatable">
          <DataGrid
            rowHeight = {60}
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={6}
            rowsPerPageOptions={[6]}
            onRowClick={handleRowClick}
          />
        </div>
    )
}

export default Datatable