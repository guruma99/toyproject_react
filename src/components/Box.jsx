import React from "react";
import "./Box.css";
function Box(props) {
  let comResult;
  if (
    // props.user이 "computer"라면
    // props.result "tie"가 아닐경우
    // props.result가 빈 문자열이 아닌 경우
    props.user === "컴퓨터" &&
    props.result !== "무승부" &&
    props.result !== ""
  ) {
    // result라는 변수한테 값이 "win"이면 "lose"로,
    // "lose"면 "win"으로 변경한 값을 result에 할당한다.

    comResult = props.result === "이겼습니다" ? "졌습니다" : "이겼습니다";
  } else {
    // 위의 경우가 아니라면
    comResult = props.result;
  }

  return (
    <div>
      <div className={`box ${comResult}`}>
        <h2 className="user">{props.user}</h2>
        <h3>{props.item.name}</h3>
        <img
          className={`img_basic ${props.user_img}`}
          src={props.item.img}
          alt="바위"
        />
        <h2 className="result">{comResult}</h2>
      </div>
    </div>
  );
}

export default Box;
