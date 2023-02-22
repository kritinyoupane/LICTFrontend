import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import "./Editor.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const SidePanel = ({value}) => {
    // const [ questions, setQuestions] = useState([])
    // useEffect(() => {
    //   const temp = value.split("<li>").map((x) => x.split("</li>")[0]);
    //   temp.shift();
    //   setQuestions(temp)
    //   console.log(questions);
    // }, [value]);
    const questions = value.split("<li>").map((x) => x.split("</li>")[0]);
    questions.shift()
  

  return (
    <div className="side-panel">
      {" "}
      Sidepanel
      {questions.map((x)=><li>{x}</li>) }
    </div>
  );
}

const Editor = () => {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="main">
          <ReactQuill theme="snow" modules={modules} onChange={setValue} />
          <SidePanel value={value}/>
        </div>
      </div>
    </div>
  );
};

export default Editor;
