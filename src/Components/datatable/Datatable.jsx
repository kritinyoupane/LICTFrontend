import "../datatable/Datatable.scss"
import { DataGrid } from '@mui/x-data-grid';

const Datatable = ({userColumns,userRows}) => {
    const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell:() => {
        return(
          <div className="cellAction">
            <div className="viewButton"> View </div>
            <div className="deleteButton"> Delete </div>
          </div>
        )
      }
    }
    ]
    return (
        <div className="datatable">
          <DataGrid
            rowHeight = {60}
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={6}
            rowsPerPageOptions={[6]}
            checkboxSelection
          />
        </div>
    )
}

export default Datatable