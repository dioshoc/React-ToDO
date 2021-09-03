import React from "react";

const OpenPopupButton = ({handleShowPopup}) => {
  return (
    <button className="open-popup-button" onClick={() => handleShowPopup()}>
      <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="35" width="12" height="82" fill="#F5F5F5"/>
        <rect y="47" width="12" height="82" transform="rotate(-90 0 47)" fill="#F5F5F5"/>
      </svg>
    </button>
  )
}

export default OpenPopupButton;