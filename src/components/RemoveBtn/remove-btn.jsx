import React from "react";

const RemoveBtn = ({action, value, classname}) => {
  return (
    <button onClick={() => action(value)} className={classname + " remove-btn"}>
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16.3757" y="19.6225" width="5.14234" height="50.9092" transform="rotate(-45 16.376 19.622)"
              fill="white"/>
        <rect x="52.1965" y="16.1984" width="5.14234" height="50.9092" transform="rotate(45 52.197 16.198)"
              fill="white"/>
      </svg>
    </button>
  )
}

export default RemoveBtn