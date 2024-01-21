import { useState } from "react";
import "./App.css";
import { calculatorButtons } from "./calculatorBtns";

function App() {
  const [input, setInput] = useState();
  const [result, setResult] = useState(0);

  return (
    <div className="app-container">
      <div className="output-container">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>

      <div className="btn-container">
        {calculatorButtons.map((btn, index) => {
          return (
            <button value={btn} className="btn" key={index}>
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
