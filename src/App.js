import logo from "./logo.svg";
import "./App.css";
// import Box from "./components/Box";
import { useState } from "react";
import Tbox from "./components/Tbox";

// ⚪️ 객체는 key:value 형태로 작성한다.
// value로 여러개의 프로퍼티를 가질 수 있다.
const choice = {
  Scissors: {
    name: "Scissors",
    img: "https://img.animalplanet.co.kr/news/2020/05/20/700/al43zzl8j3o72bkbux29.jpg",
  },
  Rock: {
    name: "Rock",
    img: "https://m.onuls.com/file_data/ntntaa/2021/05/21/c246ce96b818014de1ad8eef6ceaf4de.jpeg",
  },
  Paper: {
    name: "Paper",
    img: "https://www.sisa-news.com/data/photos/20160311/art_1458295313.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState("");
  const [comSelect, setComSelect] = useState("");
  const [result, setResult] = useState(""); // "" empty 비어있는 스트리값
  const [comResult, setComResult] = useState(""); // "" empty 비어있는 스트리값

  const play = (userchoice) => {
    let userChoice = choice[userchoice];
    setUserSelect(userChoice);
    // randomChoice();

    //randomchoice()함수를 실행했을 때 결과값
    let computerChoice = randomChoice();
    //컴퓨터가 고른값으로 담아주기
    setComSelect(computerChoice);
    //콘솔찍기
    console.log(userchoice, "선택됨!");
    console.log(computerChoice, userChoice);

    //user의 승패결과
    setResult(judgement(computerChoice, userChoice));
    //computer의 승패결과 -> user의 승패결과를 인자로 받아서 사용한다.
    setComResult(comJudgement(judgement(computerChoice, userChoice)));
  };

  const randomChoice = () => {
    // 객체의 키값이 배열의 아이템으로 들어간다.
    let strArr = Object.values(choice);
    let random = parseInt(Math.random() * 3);
    console.log(strArr[random].name, "컴퓨터랜덤");
    // 리턴값 : choice의 랜덤한 벨류값
    return strArr[random];
  };

  //user의 승패결정 함수 -> 컴퓨터가고른값과 내가 클릭한 값을 인자로 받아서 조건을 짜준다.
  const judgement = (com, user) => {
    console.log(com.name, user.name);
    if (com.name == user.name) {
      return "tie";
    } else if (user.name == "Rock")
      return com.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return com.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper") return com.name == "Rock" ? "win" : "lose";
  };

  const comJudgement = (user_result) => {
    return user_result == "win" ? "lose" : user_result == "tie" ? "tie" : "win";
  };

  return (
    <div className="App">
      <div className="box-list">
        <Tbox
          className={comResult}
          title="Com"
          choice={comSelect.name}
          result={comResult}
          img={comSelect.img}
        />
        <Tbox
          className={result}
          title="You"
          choice={userSelect.name}
          result={result}
          img={userSelect.img}
        />
      </div>
      <div className="btn-list">
        <button onClick={() => play("Scissors")}>가위</button>
        <button onClick={() => play("Rock")}>바위</button>
        <button onClick={() => play("Paper")}>보</button>
      </div>

      {/* ⚪️ */}
      {/* <h1>가위바위보게임</h1>
      <div className="center">
        <Box title="Com" user="com_img" img={game_img[1]} />
        <Box title="You" user="you_img" img={game_img[1]} />
      </div>
      <div className="btn">
        <button onClick={() => play("Scissors")}>가위</button>
        <button onClick={() => play("Rock")}>바위</button>
        <button onClick={() => play("Paper")}>보</button>
      </div> */}
    </div>
  );
}

export default App;
