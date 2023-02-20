import "../datatable/Datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
const Datatable = ({userColumns,userRows}) => {
  const navigate = useNavigate()
    const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell:() => {
        return(
          <div className="cellAction">
            <button className="approveButton"> Approve </button>
            <button className="rejectButton"> Reject </button>
          </div>
        )
      }
    }
    ]
    const handleRowClick = (row)=>{
      console.log(row.id)
      navigate(`/users/${row.id}`)
      
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