import "../new/New.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title}) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
              <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="john_doe"/>
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder="John Doe"/>
                </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="johndoe@gmail.com"/>
              </div>
              <button>Send</button>
            </form> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;