import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import axios from "axios";
import Result from "./Result";
import Popup from "./Popup";

function App() {
  const editorRef = useRef(null);
  const [responseText, setResponseText] = useState([]);
  const [replaceText, setReplaceText] = useState("");
  const [popupContent, setPopupContent] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    editorRef.current = new Quill("#editor-container", {
      theme: "snow",
    });
  }, []);

  const handleGetHighlightedText = async () => {
    try {
      const editor = editorRef.current;
      const selectedText = editor.getSelection();
      const formData = new FormData();
      formData.append("queryQuestion", selectedText);
      const config = {
        method: "post",
        url: "http://127.0.0.1:8000/api/queryQuestion/",
        headers: {
          Authorization: "Token aabd410adb43b2b540f9e9e4a87bccaa9109ccbf",
        },
        data: formData,
      };
      const response = await axios.request(config);
      setResponseText(response.data);
      console.log("Highlighted text:", selectedText);
      console.log("Response", responseText);
    } catch (e) {
      console.log(e);
    }
  };

  const handleReplaceHighlightedText = () => {
    const editor = editorRef.current;
    editor.clipboard.dangerouslyPasteHTML(replaceText);
  };

  return (
    <div className="App">
      <Popup content={popupContent} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div id="editor-container" />
      <button onClick={handleGetHighlightedText}>Get Similar Questions</button>
      <br />
      <Result
        data={responseText}
        replaceContent={setReplaceText}
        popupContent={setPopupContent}
        setIsOpen={setIsOpen}
        handleReplaceContent={handleReplaceHighlightedText}
      />
    </div>
  );
}

export default App;
