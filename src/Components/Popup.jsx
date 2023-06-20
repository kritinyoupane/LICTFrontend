import React, { useState } from 'react';

const Popup = ({content,isOpen,setIsOpen}) => {
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <ul>
                <li>{content.question}</li>
                <li>{content.examYear}</li>
                <li>{content.examinationType}</li>
            </ul>
            {/* Add your desired content here */}
          </div>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Popup;