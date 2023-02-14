import "../single/Single.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import MyPhoto from "../../images/registration.jpg"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src = {MyPhoto}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Kriti Nyoupane</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">nyoupanekriti@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">9867221345</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Pulchowk Lalitpur
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Position</span>
                  <span className="itemValue">Admin</span>
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