import { useState } from "react";
import React from "react";
import AddButton from "./component/AddButton";
import LiElement from "./component/LiElement";
import ResultComponent from "./component/ResultComponent";

export default function Calculator() {
  const [rows, setRows] = useState([]); // Gestisce le righe
  const [values, setValues] = useState([])
  const [operators, setOperators] = useState([]); // Aggiunge la gestione delle operazioni 
  const [disabledStates, setDisabledStates] = useState([]); // Gestisce gli stati di disabilitazione

  const addRow = () => {
    setRows([...rows, { id: Date.now() }]); // Aggiunge una nuova riga
    setValues([...values, 0]); // Gestisce i valori degli input
    setDisabledStates([...disabledStates, false]); // Inizializza lo stato "abilitato" per la nuova riga
    setOperators([...operators, "+"]) //Gestisce l'assegnazione delle operazioni, default "+"
  };

  const removeRow = (indexToRemove) => {
    setRows(rows.filter((_, index) => index !== indexToRemove)); // Rimuove la riga
    setValues(values.filter((_, index) => index !== indexToRemove));// Rimuove il valore dell'input
    setOperators(operators.filter((_, index) => index !== indexToRemove));// Rimuove il valore dell'input
    setDisabledStates(disabledStates.filter((_, index) => index !== indexToRemove)); // Aggiorna gli stati di disabilitazione
  };

  const handleOperatorChange = (index, newOperator) =>  {
    const updatedOperators = [...operators];
    updatedOperators[index] = newOperator;

    setOperators(updatedOperators);
  } 

  const handleInputChange = (index, newValue) => {
    const updateValues = [...values];
    updateValues[index] = newValue; //Aggiorna il valore dell'input specifico
    setValues(updateValues)    
  };
  const disableRow = (indexToDisable) => {
    setDisabledStates(
      disabledStates.map((state, index) =>
        index === indexToDisable ? !state : state
      )
    );
  };

  // Controllo valori attivi
  const activeValues = values.filter((_, index) => !disabledStates[index]);

  console.log("Valori attivi:", activeValues); // Mostrerà solo i valori delle righe abilitate

  return (
    <div className="wrapper">
      <AddButton onAdd={addRow} />

      <ul>
        {rows.map((row, index) => (
          <LiElement
            key={row.id}
            disabled={disabledStates[index]} // Passa lo stato di disabilitazione specifico
            value={values[index]} //Passa il valore dell'input
            onDelete={() => removeRow(index)} // Funzione di eliminazione
            onDisable={() => disableRow(index)} // Funzione di disabilitazione
            onInputChange={(newValue) => handleInputChange(index, newValue)} // Gestisce il cambiamento dell'input
            operator={operators[index]}
            OnOperatorChange={(newOperator) => handleOperatorChange(index, newOperator)}
          />
        ))}
      </ul>
      <ResultComponent activeValues={activeValues} operators={operators}/>
    </div>
  );
}
