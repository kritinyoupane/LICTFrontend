import React from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import "./Editor.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import axiosInstance from "../../helper/Axios";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import FindReplaceIcon from "@mui/icons-material/FindReplace";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ list: "ordered" }, { list: "bullet" }],
  ],
};

const StyledModal = ({ open, onClose, children }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "12px",
    p: 6,
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

const SidePanel = ({ value, getSelectedText, replaceSelection, setText }) => {
  const [response, setResponse] = useState([]);
  const [paraphraseResponse, setParaphraseResponse] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [viewDetails, setViewDetails] = useState(false);
  const [questionPaper, setQuestionPaper] = useState([]);
  const [apiToken, setApiToken] = useState("");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  useEffect(() => {
    (async () => {
      const tokenResponse = await axiosInstance.get("auth/getOpenAIToken");
      if (tokenResponse && tokenResponse.statusText === "OK") {
        console.log("API", tokenResponse.data.openAIToken);
        setApiToken(tokenResponse.data.openAIToken);
      }
    })();
  }, []);

  const paraphraseQuestion = async () => {
    try {
      let textToParaphrase = getSelectedText();
      if (!textToParaphrase) {
        textToParaphrase = questionText;
      }
      const noOfResult = 4;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        `Bearer ${apiToken}`
        // `Bearer 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`
      );
      const prompt = `Paraphrase "${textToParaphrase} in the question format"`;
      // const token_length = Math.min( parseInt( query.length /4 +10), 128)

      var raw = JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 128,
        temperature: 0.99,
        n: noOfResult,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const result = await fetch(
        "https://api.openai.com/v1/completions",
        requestOptions
      );
      const json = await result.json();
      setParaphraseResponse(json.choices.map((x) => x.text));

      // TODO Get API Key from backend, call to OPENAI, Store results in paraphraseResponse
    } catch (e) {
      window.alert("ERROR: Details in console");
      console.log("click on editor");
    }
  };

  // const paraPhrase = async (query, noOfResult = 1) => {
  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");
  //     myHeaders.append("Authorization", "Bearer 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");
  //     const prompt = `Paraphrase "${query} in the question format"`
  //     // const token_length = Math.min( parseInt( query.length /4 +10), 128)

  //     var raw = JSON.stringify({
  //         "model": "text-davinci-003",
  //         "prompt": prompt,
  //         "max_tokens": 128,
  //         "temperature": 0.99,
  //         "n": noOfResult
  //     });

  //     var requestOptions = {
  //         method: 'POST',
  //         headers: myHeaders,
  //         body: raw,
  //         redirect: 'follow'
  //     };

  //     const result = await fetch("https://api.openai.com/v1/completions", requestOptions);
  //     const json = await result.json()
  //     return json;
  // }

  const queryQuestion = async (question) => {
    try {
      const formData = new FormData();
      formData.append("queryQuestion", question);
      const config = {
        method: "post",
        url: "http://127.0.0.1:8000/api/queryQuestion/",
        headers: {
          Authorization: "Token aabd410adb43b2b540f9e9e4a87bccaa9109ccbf",
        },
        data: formData,
      };
      const response = await axios.request(config);
      setResponse(response.data);
      console.log("Response", response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let questionArray = value.split("\n\n");
    if (["\n", ""].includes(questionArray[questionArray.length - 1])) {
      questionArray.pop();
    }
    const question = questionArray.pop();
    if (question && question[question.length - 2] === " ") {
      console.log("space", question.split(" ").length);
      if (question.split(" ").length > 4) {
        queryQuestion(questionText);
      }
    }
    setQuestionText(question);
  }, [value]);

  const replaceQuestion = (newQuestion) => {
    try {
      const selectedText = getSelectedText();
      if (selectedText) {
        replaceSelection(newQuestion);
      } else {
        const newValue = value.replace(questionText, newQuestion);
        setText(newValue);
      }
    } catch (e) {
      console.log("Click on Editor");
    }
  };

  const copyToClipboard = (question) => {
    navigator.clipboard.writeText(question);
    // window.alert('Copied')
  };

  const querySelection = () => {
    const selectedText = getSelectedText();
    if (selectedText) {
      queryQuestion(selectedText);
    }
  };

  const viewQuestionsFromSamePaper = async (question) => {
    try {
      console.log(question);
      var formdata = new FormData();
      formdata.append("examYear", question.examYear);
      formdata.append("examinationType", question.examinationType);
      const res = await axiosInstance.post(
        "/api/examQuestionsByTypeAndYear",
        formdata
      );
      if (res) {
        console.log(res.data.results);
        setQuestionPaper(res.data.results.slice(0, 10));
      }
    } catch (e) {
      console.log("Query Error", e);
    }
  };

  const handleViewDetails = (question) => {
    viewQuestionsFromSamePaper(question);
    setViewDetails(true);
  };

  return (
    <div className="side-panel">
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab
          style={{ backgroundColor: "#ffffff", color: "#7451f8" }}
          label="Similarity"
        />
        <Tab
          style={{ backgroundColor: "#ffffff", color: "#7451f8" }}
          label="Paraphrase"
        />
      </Tabs>{" "}
      <div style={{ padding: "10px", fontSize: "20px" }}>{questionText}</div>
      {tabValue === 0 && (
        <>
          <button
            style={{ backgroundColor: "#CFDCF3", color: "#000000" }}
            onClick={querySelection}
          >
            Query Selection
          </button>
          <hr></hr>
          <div style={{ overflow: "scroll", height: "70%" }}>
            {response &&
              response.similarQuestion &&
              response.similarQuestion.map((x, i) => (
                <div
                  key={x.id}
                  style={{
                    padding: "2px",
                    margin: "10px",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 6px #d3d3d3",
                    padding: "20px",
                    paddingBottom: "0px",
                    paddingTop: "30px",
                  }}
                >
                  {x.question} <br></br>
                  <div style={{ color: "#7451f8" }}>
                    {" "}
                    {x.examYear} <br></br>
                    {`(${parseFloat(response.cosineSimilarity[i]).toFixed(2)})`}
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      style={{
                        width: "50px",
                        color: "#7451f8",
                        backgroundColor: "#ffffff",
                      }}
                      onClick={(f) => handleViewDetails(x)}
                    >
                      <ReadMoreIcon className="icon" />
                    </button>
                    <button
                      style={{
                        width: "50px",
                        color: "#7451f8",
                        backgroundColor: "#ffffff",
                      }}
                      onClick={() => replaceQuestion(x.question)}
                    >
                      <FindReplaceIcon className="icon" />
                    </button>
                    <button
                      style={{
                        width: "50px",
                        color: "#7451f8",
                        backgroundColor: "#ffffff",
                      }}
                      onClick={() => copyToClipboard(x.question)}
                    >
                      <ContentCopyIcon className="icon" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      {tabValue === 1 && (
        <>
          <button
            style={{ backgroundColor: "#CFDCF3", color: "#000000" }}
            onClick={paraphraseQuestion}
          >
            Paraphrase
          </button>
          <hr></hr>
          <div style={{ overflow: "scroll", height: "70%" }}>
            {paraphraseResponse.map((x, i) => (
              <div
                key={i}
                style={{
                  padding: "2px",
                  margin: "10px",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 6px #d3d3d3",
                  padding: "20px",
                  paddingBottom: "0px",
                  paddingTop: "30px",
                }}
              >
                {x}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    style={{
                      width: "50px",
                      color: "#7451f8",
                      backgroundColor: "#ffffff",
                    }}
                    onClick={() => replaceQuestion(x)}
                  >
                    <FindReplaceIcon className="icon" />
                  </button>
                  <button
                    style={{
                      width: "50px",
                      color: "#7451f8",
                      backgroundColor: "#ffffff",
                    }}
                    onClick={() => copyToClipboard(x)}
                  >
                    <ContentCopyIcon className="icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <StyledModal
        open={viewDetails}
        onClose={() => setViewDetails(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        Author:{" "}
        {questionPaper &&
          questionPaper[0] &&
          `${questionPaper[0].user.first_name} ${questionPaper[0].user.last_name}`}
        <hr />
        {/* Examination Year: {questionPaper && questionPaper[0] && questionPaper[0][4]} */}
        Examination Year:{" "}
        {questionPaper && questionPaper[0] && questionPaper[0].examYear}
        <hr />
        Examination Type:{" "}
        {questionPaper && questionPaper[0] && questionPaper[0].examinationType}
        <hr />
        <br />
        <br />
        <div id="styleBar" style={{ overflow: "scroll" }}>
          <div className="csvTitle">Other questions from Same paper</div>

          <hr />
          {questionPaper.map((x, i) => (
            <>
              <li style={{ margin: "5px" }} key={x[0]}>
                <span>{x.question}</span>
              </li>
              <hr />
            </>
          ))}
        </div>
      </StyledModal>
      <br />
      {/* {responseText.map(x=>x.similarQuestion)} */}
    </div>
  );
};

const Editor = () => {
  const [value, setValue] = useState("");
  const [examinationType, setExaminationType] = useState("");
  const [examinationYear, setExaminationYear] = useState("");
  const [openSave, setOpenSave] = useState(false);
  let questionArray = value
    .split("\n\n")
    .filter((x) => !["\n", ""].includes(x));
  console.log(questionArray);

  const editorRef = useRef();

  const getSelectedText = () => {
    const editor = editorRef.current.editor;
    const text = editor.getText();
    const { index, length } = editor.getSelection();
    return text.slice(index, index + length);
  };

  const handleEditorUpdate = () => {
    const editor = editorRef.current.editor;
    const text = editor.getText();
    setValue(text);
  };
  console.log(value);

  const setText = (text) => {
    const editor = editorRef.current.editor;
    editor.setText(text);
  };

  const replaceSelection = (newValue) => {
    const editor = editorRef.current.editor;
    const text = editor.getText();
    const { index, length } = editor.getSelection();
    const newText =
      text.substring(0, index) +
      newValue +
      text.substring(index + length, text.length);
    editor.setText(newText);
  };
  function convertArrayToCSV(data) {
    let csvContent = "";
    data.forEach((row) => {
      let csvRow = row.replace(/\n/g, " "); // Replace line breaks with spaces
      csvContent += csvRow + "\r\n";
    });
    return csvContent;
  }
  const handleUploadToDatabase = async (e) => {
    e.preventDefault();
    const csvData = convertArrayToCSV(questionArray);
    const file = new Blob([csvData], { type: "text/csv" });
    var formdata = new FormData();
    formdata.append("file", file);
    formdata.append("examinationType", examinationType);
    formdata.append("examYear", examinationYear);
    const res = await axiosInstance.post("/api/uploadData", formdata);
    if (res.statusText === "OK") {
      window.alert("Questions uploaded");
    }
    console.log(res);
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="main" style={{ justifyItems: "inBetween" }}>
          <StyledModal open={openSave} onClose={() => setOpenSave(false)}>
            <div style={{ width: "700px", fontSize: "20px" }}>
              <h2>Upload Questions to Database</h2>
              <br />
              <label style={{ fontSize: "20px" }} htmlFor="examType">
                Examination Type
              </label>
              <br />
              <input
                id="examType"
                style={{
                  width: "400px",
                  padding: "5px",
                  borderRadius: "5px",
                  fontSize: "16px",
                  paddingLeft: "10px",
                }}
                value={examinationType}
                onChange={(e) => setExaminationType(e.target.value)}
              />
              <br />
              <br />
              <label style={{ fontSize: "20px" }} htmlFor="examYear">
                Examination Year
              </label>
              <br />
              <input
                id="examYear"
                style={{
                  width: "400px",
                  padding: "5px",
                  borderRadius: "5px",
                  fontSize: "16px",
                  paddingLeft: "10px",
                }}
                value={examinationYear}
                placeholder="  yyyy-mm-dd"
                onChange={(e) => setExaminationYear(e.target.value)}
              />
              <br />
              <br />
              <br />
              <h2>Questions</h2>
              <div
                style={{
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "8px",
                }}
              >
                {questionArray.map((question, i) => (
                  <li key={i}>{question}</li>
                ))}{" "}
              </div>
              <br />

              <button
                style={{
                  color: "#000000",
                  background: "#cfdcf3",
                  marginLeft: "-5px",
                }}
                onClick={handleUploadToDatabase}
              >
                Upload
              </button>
            </div>
          </StyledModal>

          <ReactQuill
            ref={editorRef}
            theme="snow"
            modules={modules}
            onChange={handleEditorUpdate}
          />
          <br />
          <button
            style={{ color: "#000000", background: "#cfdcf3" }}
            id="saveButton"
            onClick={() => setOpenSave(true)}
          >
            Upload to Database
          </button>
          <SidePanel
            value={value}
            setText={setText}
            replaceSelection={replaceSelection}
            getSelectedText={getSelectedText}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
