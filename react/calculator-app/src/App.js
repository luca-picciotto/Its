import { useState } from "react";
import React from "react";
import AddButton from "./component/AddButton";
import LiElement from "./component/LiElement";

export default function Calculator() {
  const [rows, setRows] = useState([]); // Gestisce le righe
  const [values, setValues] = useState([])
  const [disabledStates, setDisabledStates] = useState([]); // Gestisce gli stati di disabilitazione

  const addRow = () => {
    setRows([...rows, { id: Date.now() }]); // Aggiunge una nuova riga
    setValues([...values, 0]); // Gestisce i valori degli input
    setDisabledStates([...disabledStates, false]); // Inizializza lo stato "abilitato" per la nuova riga
  };

  const removeRow = (indexToRemove) => {
    setRows(rows.filter((_, index) => index !== indexToRemove)); // Rimuove la riga
    setValues(values.filter((_, index) => index !== indexToRemove));// Rimuove il valore dell'input
    setDisabledStates(disabledStates.filter((_, index) => index !== indexToRemove)); // Aggiorna gli stati di disabilitazione
  };

  const handleInputChange = (index, newValue) => {
    const updateValues = [...values];
    updateValues[index] = newValue; //Aggiorna il valore dell'input specifico
    setValues(updateValues)
    console.log(values);
    
  };
  const disableRow = (indexToDisable) => {
    const updateDisabledStates = disabledStates.map((state, index) => 
      index === indexToDisable ? !state : state
    );
    setDisabledStates(updateDisabledStates);

    const updateValues = [...values];
    if(updateDisabledStates[indexToDisable]) {
      updateValues[indexToDisable] = null;
    } else {
      updateValues[indexToDisable] = 0;
    }
  };

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
          />
        ))}
      </ul>
    </div>
  );
}
