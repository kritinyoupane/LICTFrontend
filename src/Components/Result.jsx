import React from "react";

const Result = ({ data, popupContent, setIsOpen, handleReplaceContent }) => {
    const handleClick = (value) => {
        handleReplaceContent(value);
    };
    const handleView = (data) => {
        popupContent(data);
        setIsOpen(true);
    };
    return (
        <>
            <div>Result</div>
            <ul>
                {data["similarQuestion"] &&
                    data["similarQuestion"].map((d, index) => (
                        <li key={index}>
                            {d.question}{" "}
                            <button onClick={() => handleClick(d.question)}>Replace</button>
                            <button
                                onClick={() => {
                                    handleView(d);
                                }}
                            >
                                View
                            </button>
                        </li>
                    ))}
            </ul>
        </>
    );
};
export default Result;
