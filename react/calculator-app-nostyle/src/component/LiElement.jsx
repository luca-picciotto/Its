import ButtonFunc from "./ButtonFunc";
import InputElement from "./InputElement";
import SelectOption from "./SelectOption";

function LiElement({ onDelete, onDisable, disabled, value, onInputChange, operator, OnOperatorChange }) {
  
  return (
    <li>
      <InputElement 
        value={value} // Passa il valore corrente
        onChange={onInputChange} // Passa il gestore del cambiamento
        disabled={disabled} /> {/* Passa la prop `disabled` */}
      <SelectOption 
        value={operator} 
        onOperatorChange={OnOperatorChange} />
      <ButtonFunc 
        onDelete={onDelete} 
        onDisable={onDisable} 
        disabled={disabled} />
    </li>
  );
}

export default LiElement;
