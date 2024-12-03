import React, { useState } from "react";
import "./Calculator.css";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("");

  const appendToDisplay = (value: string) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <div className="buttons">
        <button onClick={() => appendToDisplay("(")}>(</button>
        <button onClick={() => appendToDisplay(")")}>)</button>
        <button onClick={clearDisplay} id="clear">
          C
        </button>
        <button onClick={backspace}>⌫</button>
        <button onClick={() => appendToDisplay("/")} className="function">
          /
        </button>

        {["7", "8", "9", "*"].map((item) => (
          <button key={item} onClick={() => appendToDisplay(item)}>
            {item}
          </button>
        ))}
        <button onClick={() => appendToDisplay("-")} className="function">
          -
        </button>
        <button onClick={() => appendToDisplay("+")} className="function">
          +
        </button>

        {["4", "5", "6", "1", "2", "3", "0"].map((item) => (
          <button key={item} onClick={() => appendToDisplay(item)}>
            {item}
          </button>
        ))}
        <button onClick={() => appendToDisplay(".")}>.</button>
        <button onClick={calculate} id="equals">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
