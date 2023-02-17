export const userColumns = [
    { field: "id", headerName: "ID", width: 70},
    {
      field: "user",
      headerName: "User",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 180,
    },
  
    {
      field: "checkin",
      headerName: "Check In",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithCheckIn">
            {params.row.checkindate} 
            <div className="time">
                {params.row.checkintime}
            </div> 
          </div>
        );
    },
},

    {
        field: "checkout",
        headerName: "Check Out",
        width: 150,
        renderCell: (params) => {
            return (
              <div className="cellWithCheckOut">
                {params.row.checkoutdate}
                <div className="time"> 
                   {params.row.checkouttime}
                </div>
              </div>
            );
        },
      },
    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "approved",
      email: "1snow@gmail.com",
      checkindate: "2023-02-14",
      checkintime: "13:00",
      checkoutdate: "2023-02-14",
      checkouttime: "15:00"
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "not approved",
      checkindate: "2023-02-14",
      checkintime: "13:00",
      checkoutdate: "2023-02-14",
      checkouttime: "15:00"
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      checkindate: "2023-02-14",
      checkintime: "13:00",
      checkoutdate: "2023-02-14",
      checkouttime: "15:00"
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "approved",
      checkindate: "2023-02-14",
      checkintime: "13:00",
      checkoutdate: "2023-02-14",
      checkouttime: "15:00"
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "not approved",
      checkindate: "2023-02-14",
      checkintime: "13:00",
      checkoutdate: "2023-02-14",
      checkouttime: "15:00"
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "approved",
      checkindate: "2023-02-14",
      checkintime: "13:00",
      checkoutdate: "2023-02-14",
      checkouttime: "15:00"
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "not approved",
      checkindate: "2023-02-14",
      checkintime: "13:00",
      checkoutdate: "2023-02-14",
      checkouttime: "15:00"
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "approved",
      checkindate: "2023-02-14",
      checkintime: "13:00",
      checkoutdate: "2023-02-14",
      checkouttime: "15:00"
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      checkindate: "2023-02-14",
      checkintime: "13:00",
      checkoutdate: "2023-02-14",
      checkouttime: "15:00"
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "approved",
      checkindate: "2023-02-14",
      checkintime: "13:00",
      checkoutdate: "2023-02-14",
      checkouttime: "15:00"
    },
  ];