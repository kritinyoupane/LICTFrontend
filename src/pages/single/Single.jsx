import { useContext, useState } from "react";
import "../single/Single.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import AuthContext from "../../context/AuthContext";
import { useParams } from "react-router-dom";

const Single = () => {
  const {userInfo} = useContext(AuthContext)
  const [userDetails, setUserDetails] = useState(userInfo);
  const { userId} = useParams()
  console.log(userId)

  const {fullName, email, phoneNumber, address, isSuperUser, position} = userDetails
  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        Need to implement for viewing other user details
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{fullName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{phoneNumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Position</span>
                  <span className="itemValue">{position}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Session</h1>
        <div className="detailItem">
                  <span className="itemKey">Check In</span>
                  <span className="itemValue">2023/02/14 </span>
                  <span className="timeValue">13:00</span>
                  <br></br>
                  <span className="itemKey">Check Out</span>
                  <span className="itemValue">2023/02/14 </span>
                  <span className="timeValue">17:00</span>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Single;