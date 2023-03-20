import React from "react";
import "./Tbox.css";
const Tbox = (props) => {
  // let result;
  // if (
  //   props.title === "Computer" &&
  //   props.result !== "tie" &&
  //   props.result !== ""
  // ) {
  //   result = props.result === "win" ? "lose" : "win";
  // } else {
  //   result = props.result === "tie";
  // }
  return (
    <div className={`box ${props.className}`}>
      <h1>{props.title}</h1>
      <h2>{props.choice}</h2>
      {/* <h2>Rock</h2> */}
      {/* 해결방법 : 조건부 렌더링
      유저가 버튼을 클릭했을 때 useState() */}
      <img src={props.img} alt="바위" />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Tbox;
