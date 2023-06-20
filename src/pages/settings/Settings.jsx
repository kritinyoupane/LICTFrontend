import React, { useState, useEffect, useRef } from "react";
import Layout from "../../Components/layout/Layout";
import axiosInstance from "../../helper/Axios";
import AutoReloadTimer from "../../Components/AutoReloadTimer";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BiLoaderAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import "./Settings.scss";

const Settings = () => {
  const [serverStatus, setServerStatus] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [apiToken, setApiToken] = useState('1234567');
  const [editToken, setEditToken] = useState(false);
  const availableModels = ["USE", "BERT"];
  const [selectedModel, setSelectedModel] = useState(availableModels[0]);
  const [array, setArray] = useState([]);
  const [csv, setCsv] = useState(null);
  const uploadRef = useRef(null);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    setCsv(file);
    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        const questions = text.split(",");

        setArray(questions);
      };

      fileReader.readAsText(file);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get("api/serverStatus");
      if (response.statusText === "OK") {
        console.log(";akjsflk;jaslkfjlakjfl;kas", response.data);
        setServerStatus(response.data);
        setSelectedModel(response.data.data.currentModel);
      }
      const tokenResponse = await axiosInstance.get('auth/getOpenAIToken');
      if(tokenResponse && tokenResponse.statusText ==='OK'){
        console.log('API', tokenResponse.data.openAIToken)
        setApiToken(tokenResponse.data.openAIToken)
      }
    })();
  }, []);

  if (!serverStatus) {
    return <Layout>Server Disconnected</Layout>;
  }

  const getIcon = (statusIndex) => {
    const {questionsUpdatingStatus, isQuestionsUpdating} = serverStatus.data
    if(!isQuestionsUpdating){
      return <IoIosCheckmarkCircle color="#00ff00" size={32} />
    }
    
    console.log(statusIndex, questionsUpdatingStatus)
    if(statusIndex<questionsUpdatingStatus){
      return <IoIosCheckmarkCircle color="#00ff00" size={32} />
    }else if(statusIndex >=  questionsUpdatingStatus){
      return <BiLoaderAlt className="spin" color="#7451f8" size={32} />
    }
    else {
      return<></>
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("file", csv);

    const res = await axiosInstance.post("/api/uploadData", formdata);
    if(res.statusText==="OK"){
      window.alert("Questions uploaded")
      setCsv(null);
      setArray([])
    }
    console.log(res);
  };

  const handleTokenInputBlur = async()=> {
    setEditToken(false)
    var formdata = new FormData();
    formdata.append("openAIToken", apiToken);

    const res = await axiosInstance.post("/auth/addOpenAIToken", formdata);
    if(res.statusText==="OK"){
      window.alert("Api Token updated")
    }
    console.log(res);
  }

  return (
      <div className="home">
          <Sidebar />
          <div className="homecontainer">
              <Navbar />
              <div className="charts">
                  <div className="rightSection" id="styleBar">
                      <div className="titl">Questions</div>
                      <br></br>
                      <div className="qsnOption">
                          <div className="inputSec">
                              <input></input>
                              <input></input>
                          </div>
                          <button className="qsnButton" onClick={() => uploadRef.current.click()}>
                              Select CSV
                          </button>
                          <input
                              style={{ display: "none" }}
                              ref={uploadRef}
                              type={"file"}
                              id={"csvFileInput"}
                              accept={".csv"}
                              onChange={handleOnChange}
                          />
                          <button
                              className="qsnButton"
                              disabled={csv === null}
                              onClick={handleUpload}
                          >
                              Upload
                          </button>
                      </div>
                      <div className="qsnSection" id="styleBar">
                          <div className="csvTitle">Title</div>
                          {array.map((x, i) => (
                              <>
                                  <li key={i}>{x}</li>
                                  <hr />
                              </>
                          ))}
                      </div>
                      <div style={{ color: "black" }}>
                          OpenAI API Token
                          <br></br>
                          {editToken ? (
                                  <input
                                      value={apiToken}
                                      onChange={(e) => setApiToken(e.target.value)}
                                      onBlur={handleTokenInputBlur}
                                      autofocus
                                  ></input>
                          ) : (
                              <div>{apiToken} 
                              <button onClick={() => setEditToken(true)}>Edit</button></div>
                          )}
                      </div>

                      <table className="qsnTable">
                          {Object.values(serverStatus.questionUpdatingStatusMap).map((x, i) => (
                              <tr>
                                  <td className="status">{x}</td>
                                  {getIcon(i)}
                              </tr>
                          ))}
                      </table>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Settings;
