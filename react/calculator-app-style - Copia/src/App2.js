import { useState } from "react";
import React from "react";
import AddButton from "./component/AddButton";
import LiElement from "./component/LiElement";
import ResultComponent from "./component/ResultComponent";
import "./styles/calculator.css";

export default function Calculator() {
  const [rows, setRows] = useState([]);
  const [values, setValues] = useState([]);
  const [operators, setOperators] = useState([]);
  const [disabledStates, setDisabledStates] = useState([]);

  const addRow = () => {
    const newRow = { id: Date.now() };
    setRows([...rows, newRow]);
    setValues([...values, 0]);
    setOperators([...operators, "+"]);
    setDisabledStates([...disabledStates, false]);
  };

  const removeRow = (indexToRemove) => {
    const filterByIndex = (array) =>
      array.filter((_, index) => index !== indexToRemove);

    setRows(filterByIndex(rows));
    setValues(filterByIndex(values));
    setOperators(filterByIndex(operators));
    setDisabledStates(filterByIndex(disabledStates));
  };

  const handleOperatorChange = (index, newOperator) => {
    setOperators(
      operators.map((operator, i) => (i === index ? newOperator : operator))
    );
  };

  const handleInputChange = (index, newValue) => {
    setValues(values.map((value, i) => (i === index ? newValue : value)));
  };

  const disableRow = (indexToDisable) => {
    setDisabledStates(
      disabledStates.map((state, index) =>
        index === indexToDisable ? !state : state
      )
    );
  };

  const activeValues = [];
  for (let i = 0; i < values.length; i++) {
    if (!disabledStates[i]) {
      activeValues.push(values[i]);
    }
  }

  return (
    <div className="wrapper">
      <AddButton onAdd={addRow} />
      <ul>
        {rows.map((row, index) => {
          const isLastRow = rows.length === 1 || index === rows.length - 1;

          return (
            <LiElement
              key={row.id}
              disabled={disabledStates[index]}
              value={values[index]}
              onDelete={() => removeRow(index)}
              onDisable={() => disableRow(index)}
              onInputChange={(newValue) => handleInputChange(index, newValue)}
              operator={operators[index]}
              OnOperatorChange={(newOperator) =>
                handleOperatorChange(index, newOperator)
              }
              isLastRow={isLastRow}
            />
          );
        })}
      </ul>
      <ResultComponent activeValues={activeValues} operators={operators} />
    </div>
  );
}
