import { useState } from "react";
import "./App.css";
import { calculatorButtons } from "./calculatorBtns";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const operations = ["+", "-", "*", "/"];

  const handleUserInput = (e) => {
    const { value } = e.target;

    if (input === "" && operations.includes(value)) {
      return; //to prevent user to enter first input as operations
    }

    if (input === "0" && value === "0") {
      return;
    }

    switch (value) {
      case "=":
        if (
          !operations.includes(input.slice(-1)) &&
          input.indexOf("÷0") === -1 //to prevent infinite values
        ) {
          const evalResult = eval(input).toString();
          setResult(evalResult);

          setInput("");
        }
        break;

      case "CE":
        for (let i = input.length - 1; i >= 0; i--) {
          const char = input[i];

          if (!/[0-9.]/.test(char)) {
            setInput(input.substring(0, i + 1));
          }
        }

        break;

      case "C":
        setInput("");
        setResult(0);

        break;

      case "<-":
        if (input === "") return;

        setInput(input.slice(0, -1));

        break;

      default:
        if (
          operations.includes(input.slice(-1)) &&
          operations.includes(value)
        ) {
          return;
        }

        if (value === "." && input.slice(-1) === ".") {
          return;
        }

        setInput((prev) => prev + value);
        break;
    }
  };

  return (
    <div className="app-container">
      <div className="output-container">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>

      <div className="btn-container">
        {calculatorButtons.map((btn, index) => {
          return (
            <button
              onClick={handleUserInput}
              value={btn}
              className="btn"
              key={index}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
