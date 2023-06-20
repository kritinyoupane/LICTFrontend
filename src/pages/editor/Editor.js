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

const SidePanel = ({ value, getSelectedText, replaceSelection, setText }) => {
    const [response, setResponse] = useState([]);
    const [paraphraseResponse, setParaphraseResponse] = useState(['Question1', 'Question2', 'Question3'])
    const [questionText, setQuestionText] = useState("");
    const [tabValue, setTabValue] = useState(0);
    const [viewDetails, setViewDetails] = useState(false)
    const [questionPaper, setQuestionPaper] = useState([])

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const paraphraseQuestion = async () => {
        try {
            let textToParaphrase = getSelectedText();
            if (!textToParaphrase) {
                textToParaphrase = questionText;
            }

            // TODO Get API Key from backend, call to OPENAI, Store results in paraphraseResponse
        } catch (e) {
            console.log("click on editor");
        }
    };

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

    const viewQuestionsFromSamePaper = async(question) => {
        try{
            console.log(question)
            var formdata = new FormData();
            formdata.append("examYear", question.examYear);
            formdata.append("examinationType", question.examinationType);
            const res = await axiosInstance.post("/api/examQuestionsByTypeAndYear", formdata);
            if(res){
                console.log(res.data.results)
                setQuestionPaper(res.data.results.slice(0, 10))
            }
        }catch(e){
            console.log('Query Error', e)
        }
    }

    const handleViewDetails = (question) => {
        viewQuestionsFromSamePaper(question);
        setViewDetails(true)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
        <div className="side-panel">
            <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Similarity" />
                <Tab label="Paraphrase" />
            </Tabs>{" "}
            {/* {questions.map((x)=><li>{x}</li>) } */}
            {questionText}
            {tabValue === 0 && (
                <>
                    <button onClick={querySelection}>Query Selection</button>
                    {response &&
                        response.similarQuestion &&
                        response.similarQuestion.map((x, i) => (
                            <div
                                key={x.id}
                                style={{
                                    border: "solid",
                                    borderWidth: "2px",
                                    padding: "2px",
                                    margin: "10px",
                                }}
                            >
                                {x.question} <br></br> {x.examYear} <br></br>
                                {`(${parseFloat(response.cosineSimilarity[i]).toFixed(2)})`}
                                <div style={{ display: "flex" }}>
                                    <button
                                        onClick={(f) => {
                                            handleViewDetails(x);
                                        }}
                                    >
                                        Details
                                    </button>
                                    <button onClick={() => replaceQuestion(x.question)}>
                                        Replace
                                    </button>
                                    <button onClick={() => copyToClipboard(x.question)}>
                                        Copy
                                    </button>
                                </div>
                            </div>
                        ))}
                </>
            )}
            {tabValue === 1 && (
                <>
                    <button onClick={paraphraseQuestion}>Paraphrase</button>
                    {paraphraseResponse.map((x, i) => (
                        <div
                            key={i}
                            style={{
                                border: "solid",
                                borderWidth: "2px",
                                padding: "2px",
                                margin: "10px",
                            }}
                        >
                            {x}
                            <div style={{ display: "flex" }}>
                                <button onClick={() => replaceQuestion("TODO")}>Replace</button>
                                <button onClick={() => copyToClipboard("TODO")}>Copy</button>
                            </div>
                        </div>
                    ))}
                </>
            )}
            {/* <Modal open={viewDetails} onClose={()=>console.log('close')}>Hello</Modal> */}
            <Modal
                open={viewDetails}
                onClose={()=>setViewDetails(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                
                <Box sx={style}>
                    <div  id="styleBar" style={{height: '80%', overflow: 'scroll'}}>
                    <div className="csvTitle">Details</div>
                    Examination Year: {questionPaper[0][4]}
                    <hr />
                    Examination Type: {questionPaper[0][5]}
                    <hr />
                    <hr />
                    {questionPaper.map((x, i) => (
                        <>
                            <li key={x[0]}>{x[1]}</li>
                            <hr />
                        </>
                    ))}
                </div>
                </Box>
            </Modal>
            <br />
            {/* {responseText.map(x=>x.similarQuestion)} */}
        </div>
    );
};

const Editor = () => {
    const [value, setValue] = useState("");

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
            text.substring(0, index) + newValue + text.substring(index + length, text.length);
        editor.setText(newText);
    };

    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                <div className="main">
                    <ReactQuill
                        ref={editorRef}
                        theme="snow"
                        modules={modules}
                        onChange={handleEditorUpdate}
                    />
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
