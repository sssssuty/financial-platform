import React, { useState } from "react";
import "../css/Analysis.css";

const Analysis = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (operation === "add") setResult(n1 + n2);
    if (operation === "subtract") setResult(n1 - n2);
    if (operation === "multiply") setResult(n1 * n2);
    if (operation === "divide") setResult(n2 !== 0 ? n1 / n2 : "Error (div by 0)");
  };

  return (
    <div className="analysis">
      <h1>Financial Calculator</h1>
      <div className="calculator">
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        <div className="buttons">
          <button onClick={() => handleCalculation("add")}>Add</button>
          <button onClick={() => handleCalculation("subtract")}>Subtract</button>
          <button onClick={() => handleCalculation("multiply")}>Multiply</button>
          <button onClick={() => handleCalculation("divide")}>Divide</button>
        </div>
        {result !== null && <p>Result: {result}</p>}
      </div>
    </div>
  );
};

export default Analysis;
