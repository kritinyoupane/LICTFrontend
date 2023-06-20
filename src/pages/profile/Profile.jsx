import { useContext, useState } from "react";
import "./Profile.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import AuthContext from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "../../helper/Axios";
import { profileDataTransform } from "../../helper/dataTransform";
import Chart from "../../Components/charts/Chart";
import Layout from "../../Components/layout/Layout";

const Profile = () => {
  const { userInfo } = useContext(AuthContext);
  const { userId: uid } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [queryHistory, setQueryHistory] = useState(null);
  const [loginHistory, setLoginHistory] = useState(null);
  const [loginGraphData, setLoginGraphData] = useState(null);
  let userId = userInfo.id;
  if (uid) {
    userId = uid;
  }

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(`auth/profile/${userId}`);
      if (response && response.statusText === "OK") {
        console.log(response);
        if (response.data.queryUser.length > 0) {
          setUserDetails(profileDataTransform(response));
        }
      }

      const queryResponse = await axiosInstance.get(`api/queryCount/${userId}`);
      if (queryResponse && queryResponse.statusText==="OK") {
        const temp = [];
        const { date, count } = queryResponse.data;
        date.map((d, i) => {
          temp.push({ date: d, count: count[i] });
          return 0;
        });
        setQueryHistory(temp);
      }

      const loginResponse = await axiosInstance.get(`auth/userHistory/${userId}`);
      console.log(loginResponse)
     
      if(loginResponse && loginResponse.statusText==="OK"){
        const {loginHistory: lh} = loginResponse.data;
        console.log(lh)
        setLoginGraphData(lh.map(({login_at})=>{
          let loginString = (new Date(Date.parse(login_at)));
          return ({date: loginString.toLocaleDateString(), time: parseInt(loginString.toLocaleTimeString().split(":"))})
        }))
        const latestLoginHistory = lh.pop();
        console.log(latestLoginHistory)
        setLoginHistory(latestLoginHistory)
      }
    })();
  }, []);

  if (!userDetails) {
    return <Layout>ERROR : User Not found</Layout>;
  }
  const { fullName, email, phoneNumber, address, isSuperUser, position } =
    userDetails;

  const handleLoginHistory = ()=>{
    let loginDate, loginTime, logOutDate, logOutTime = "-";
    if(loginHistory){
      const {login_at, logout_at} = loginHistory;
      if(login_at){
        let loginString = new Date(Date.parse(login_at));
        loginDate = loginString.toLocaleDateString();
        loginTime = loginString.toLocaleTimeString()
      }
      if(logout_at){
        
        let logoutString = new Date(Date.parse(logout_at));
        logOutDate = logoutString.toLocaleDateString();
        logOutTime = logoutString.toLocaleTimeString()

      }
    }

    return [loginDate, loginTime, logOutDate, logOutTime ];
  }

  const [loginDate, loginTime, logOutDate, logOutTime ] = handleLoginHistory()
  
  
  

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="t">Information</h1>
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
                  <span className="itemValue">{address}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Position</span>
                  <span className="itemValue">{position}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"><h1 className="t">Last Session</h1>
          {loginHistory ? (
            <div className="detailItem">
              <span className="itemKey">Check In</span>
              <span className="itemValue">{loginDate} </span>
              <span className="timeValue">{loginTime}</span>
              <br></br>
              <span className="itemKey">Check Out</span>
              <span className="itemValue">{logOutDate} </span>
              <span className="timeValue">{logOutTime}</span>
            </div>
          ) : (
            "Login History not available"
          )}</div>
        </div>
        {queryHistory && (
          <div className="chart-container" style={{display: "flex", padding: '20px'}}>
          <Chart
            title="Query History"
            data={queryHistory}
            width="50%"
            aspect={2 / 1}
          />
          <Chart
            title="Login History"
            data={loginGraphData}
            width="50%"
            aspect={2 / 1}
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
