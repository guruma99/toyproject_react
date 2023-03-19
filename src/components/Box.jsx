import React from "react";
import "./Box.css";

function Box(props) {
  return (
    <div>
      <div className="box">
        <h2 className="title">{props.title}</h2>
        <img className={props.user} src={props.img} alt="바위" />
        <h2 className="result">{props.result}</h2>
      </div>
    </div>
  );
}

export default Box;
