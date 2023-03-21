import React from "react";
import "./Tbox.css";
const Tbox = (props) => {
  // let result;
  // if (
  //   // props.title이 "computer"라면
  //   // props.result "tie"가 아닐경우
  //   // props.result가 빈 문자열이 아닌 경우
  //   props.title === "Com" &&
  //   props.result !== "tie" &&
  //   props.result !== ""
  // ) {
  //   // result라는 변수한테 값이 "win"이면 "lose"로,
  //   // "lose"면 "win"으로 변경한 값을 result에 할당한다.
  //   result = props.result === "win" ? "lose" : "win";
  // } else {
  //   // 위의 경우가 아니라면
  //   result = props.result;
  // }
  return (
    <div className={`box ${props.className}`}>
      <h1>{props.title}</h1>
      {/* <h2>{props.title && props.choice}</h2> */}
      {/* 해결 방법 : 조건부 렌더링 
          유저가 버튼을 클릭했을 때 useState값이 들어오고,
          값이 변경되면서 item이 img를 그려야 하는데,
          초기값이 null이라 img를 보여주지 못하고 에러 발생!
          => 조건부 렌더링으로 값이 null 아닐때만 실행되게 한다.
          dkjwdkiimm=
          리액트 컴포넌트는 UI를 리턴할 때 
          보여주고자 하는 값이 없다면 에러를 일으킨다.
          item 값이 null 아니라면 우항의 값을 렌더링 한다.
          item값이 null이라면 false를 리턴하니까 
          우항이 실행되지 않는다.(렌더링X)
      */}
      <img src={props.choice && props.img} alt="바위" />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Tbox;
