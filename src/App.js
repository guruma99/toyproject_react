import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";
import { useState } from "react";
// import Tbox from "./components/Tbox";

// ⚪내 프로젝트
const game_img = ["img/rock.png", "img/scissors.png", "img/paper.png"];
const game = {
  Rock: {
    name: "Rock",
    img: "img/rock.png",
  },
  Scissors: {
    name: "Scissors",
    img: "img/scissors.png",
  },
  Paper: {
    name: "Paper",
    img: "img/paper.png",
  },
};

// ⚪️
// 객체는 key:value 형태로 작성한다.
// value로 여러개의 프로퍼티를 가질 수 있다.

// const choice = {
//   Scissors: {
//     name: "Scissors",
//     img: "https://img.animalplanet.co.kr/news/2020/05/20/700/al43zzl8j3o72bkbux29.jpg",
//   },
//   Rock: {
//     name: "Rock",
//     img: "https://m.onuls.com/file_data/ntntaa/2021/05/21/c246ce96b818014de1ad8eef6ceaf4de.jpeg",
//   },
//   Paper: {
//     name: "Paper",
//     img: "https://www.sisa-news.com/data/photos/20160311/art_1458295313.jpg",
//   },
// };

function App() {
  // ⚪ 내 프로젝트
  // 1. 렌더링이 될 때 보여지기 위해 초기값으로 Rock이미지를 넣어놓기
  const [yourSelect, setYourSelect] = useState(game.Rock);
  const [comSelect, setComSelect] = useState(game.Rock);
  const [result, setYourResult] = useState("");
  const [youAni, setYouAni] = useState("you_img");
  const [comAni, setComAni] = useState("com_img");

  // 🔴2. 가위바위보 버튼을 클릭했을 때, 보여지게 할 함수
  const play = (userchoice) => {
    // 3. Rock,Scissors,Paper 을 인자로 가져와서 콘솔로 내가 클릭한 것을 확인한다.
    // console.log(userchoice, "선택한 것");

    // 🟡game배열안의 []객체를 변수에 담는다.
    let UserChoice = game[userchoice];
    console.log(UserChoice, "사용자");

    // 🟡game배열안의 []객체를 변수에 담는다.
    let ComChoice = game[randomChoice()];
    console.log(ComChoice, "컴퓨터");

    // 가져온 객체--> name,img의 value값으로 Select의 useState를 item로 넣어준다.
    setYourSelect(UserChoice);
    setComSelect(ComChoice);
    // 게임결과를 결정짓는 함수에 내가 낸 값과, 컴퓨터가 낸 값을 인자로 담아주기
    judgement(ComChoice, UserChoice);
    //사용자의 승패 결과값을 final이라는 변수에 담아주기
    let yourResult = judgement(ComChoice, UserChoice);
    console.log(yourResult);
    //결과값 usestate에 담아주기
    setYourResult(yourResult);
    setYouAni("you_basic");
    setComAni("com_basic");
  };

  // 🔴 컴퓨터가 랜덤으로 정하는 가위바위보 함수선언
  const randomChoice = () => {
    // 객체의 키값이 배열의 아이템으로 들어간다.
    let game_arr = Object.keys(game);
    // console.log(game_arr);

    // Math.random() * num : 0부터 num 까지의 숫자를 랜덤으로 반환한다.
    // parseInt 정수로 반환하는 함수
    let random = parseInt(Math.random() * game_arr.length);
    // console.log(random);
    // console.log(game_arr[random]);
    // 랜덤함수를 호출시 나오게 할 리턴값을 작성한다.
    return game_arr[random];
  };
  // 🔴 게임승패를 가리는 조건을 가지는 함수선언
  const judgement = (com, you) => {
    // com과 you가 같다면? "무승부"
    // com이 Scissors => you가 Rock? 이겼습니다 : 졌습니다
    // com이 Rock => you가 Paper? 이겼습니다 : 졌습니다
    // com이 Paper => you가 Scissors? 이겼습니다 : 졌습니다

    // com.name === you.name? setResult("무승부")
    if (com.name == you.name) {
      return "무승부";
    } else if (com.name == "Scissors") {
      return you.name == "Rock" ? "이겼습니다" : "졌습니다";
    } else if (com.name == "Rock") {
      return you.name == "Paper" ? "이겼습니다" : "졌습니다";
    } else if (com.name == "Paper") {
      return you.name == "Scissors" ? "이겼습니다" : "졌습니다";
    }
  };
  // 🔴 게임이 끝나고 리플레이 할수있게 하는 함수선언
  const replay = () => {
    setYourSelect(game.Rock);
    setComSelect(game.Rock);
    setYourResult("");
    setYouAni("you_img");
    setComAni("com_img");
  };

  // ⚪
  // const [userSelect, setUserSelect] = useState(null);
  // const [comSelect, setComSelect] = useState(null);
  // const [result, setResult] = useState(""); // "" empty 비어있는 스트리값
  // const [comResult, setComResult] = useState("");

  // const play = (userchoice) => {
  //   //콘솔찍기
  //   console.log(userchoice, "선택됨!");

  //   let userChoice = choice[userchoice];
  //   setUserSelect(userChoice);

  //   // randomChoice();

  //   //randomchoice()함수를 실행했을 때 결과값
  //   let computerChoice = randomChoice();
  //   //컴퓨터가 고른값으로 담아주기
  //   setComSelect(computerChoice);

  //   console.log(computerChoice, userChoice);

  //   //user의 승패결과
  //   setResult(judgement(computerChoice, userChoice));
  //   // computer의 승패결과 -> user의 승패결과를 인자로 받아서 사용한다.
  //   setComResult(comJudgement(judgement(computerChoice, userChoice)));
  // };

  // const randomChoice = () => {
  //   // 객체의 키값이 배열의 아이템으로 들어간다.
  //   let strArr = Object.values(choice);
  //   let random = parseInt(Math.random() * 3);
  //   console.log(strArr[random].name, "컴퓨터랜덤");
  //   // 리턴값 : choice의 랜덤한 벨류값
  //   return strArr[random];
  // };

  // //user의 승패결정 함수 -> 컴퓨터가고른값과 내가 클릭한 값을 인자로 받아서 조건을 짜준다.
  // const judgement = (com, user) => {
  //   console.log(com.name, user.name);
  //   if (com.name == user.name) {
  //     return "tie";
  //   } else if (user.name == "Rock")
  //     return com.name == "Scissors" ? "win" : "lose";
  //   else if (user.name == "Scissors")
  //     return com.name == "Paper" ? "win" : "lose";
  //   else if (user.name == "Paper") return com.name == "Rock" ? "win" : "lose";
  // };

  // const comJudgement = (user_result) => {
  //   return user_result == "win" ? "lose" : user_result == "tie" ? "tie" : "win";
  // };

  return (
    <div className="App">
      {/* <div className="box-list">
        <Tbox
          className={comResult}
          title="Com"
          choice={comSelect}
          result={comResult}
          img={comSelect}
        />
        <Tbox
          className={result}
          title="You"
          choice={userSelect}
          result={result}
          img={userSelect}
        />
      </div>
      <div className="btn-list">
        <button onClick={() => play("Scissors")}>가위</button>
        <button onClick={() => play("Rock")}>바위</button>
        <button onClick={() => play("Paper")}>보</button>
      </div> */}

      {/* ⚪️ 내 프로젝트*/}
      <h1>가위바위보게임</h1>
      <div className="center">
        <Box user="컴퓨터" user_img={comAni} item={comSelect} result={result} />
        <Box
          user="사용자"
          user_img={youAni}
          item={yourSelect}
          result={result}
        />
      </div>
      <div className="btn">
        <button onClick={() => play("Scissors")}>가위</button>
        <button onClick={() => play("Rock")}>바위</button>
        <button onClick={() => play("Paper")}>보</button>
        <button className="replay" onClick={() => replay()}>
          replay
        </button>
      </div>
      {/* ⚪ */}
    </div>
  );
}

export default App;
