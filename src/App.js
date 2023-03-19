import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";
// import { Paper, Rock, Scissors } from "/img";

let game_img = ["/img/scissors.png", "/img/rock.png", "/img/paper.png"];
// const choice = {
//   rock: {
//     // key
//     name: "Rock",
//     img: Rock,
//   },
//   scissors: {
//     name: "Scissors",
//     img: Scissors,
//   },
//   paper: {
//     name: "Paper",
//     img: Paper,
//   },
// };

// function Random() {

// }

function App() {
  // const [result, setResult] = useState(""); // "" empty 비어있는 스트리값

  const randomChoice = () => {
    // 객체의 키값이 배열의 아이템으로 들어간다.
    let random = parseInt(Math.random() * 3);
    console.log(random);
  };

  return (
    <div className="App">
      <h1>가위바위보게임</h1>
      <div className="center">
        <Box title="Com" user="com_img" img={game_img[1]} />
        <Box title="You" user="you_img" img={game_img[1]} />
      </div>
      <div className="btn">
        <button onClick={randomChoice}>가위</button>
        <button onClick={randomChoice}>바위</button>
        <button onClick={randomChoice}>보</button>
      </div>
    </div>
  );
}

export default App;
