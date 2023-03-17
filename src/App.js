import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <h1>가위바위보게임</h1>
      <div className="center">
        <Box title="Com" user="com_img" />
        <Box title="You" user="you_img" />
      </div>
      <div className="btn">
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  );
}

export default App;
