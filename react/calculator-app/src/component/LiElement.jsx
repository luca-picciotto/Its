import ButtonFunc from "./ButtonFunc";
import InputElement from "./InputElement";
import SelectOption from "./SelectOption";

function LiElement({ onDelete, onDisable, disabled, value, onInputChange, operator, OnOperatorChange, isLastRow }) {
  
  return (
    <li className={disabled ? "disabled" : ""}>
      <InputElement 
        value={value} // Passa il valore corrente
        onChange={onInputChange} // Passa il gestore del cambiamento
        disabled={disabled} /> {/* Passa la prop `disabled` */}
      <SelectOption 
        value={operator} 
        onOperatorChange={OnOperatorChange} 
        isLastRow={isLastRow}  />
      <ButtonFunc 
        onDelete={onDelete} 
        onDisable={onDisable} 
        disabled={disabled} />
    </li>
  );
}

export default LiElement;
