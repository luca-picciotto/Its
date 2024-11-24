import ButtonFunc from "./ButtonFunc";
import InputElement from "./InputElement";
import SelectOption from "./SelectOption";

function LiElement({ onDelete, onDisable, disabled, value, onInputChange }) {
  return (
    <li>
      <SelectOption />
      <InputElement 
        value={value} // Passa il valore corrente
        onChange={onInputChange} // Passa il gestore del cambiamento
        disabled={disabled} /> {/* Passa la prop `disabled` */}
      <ButtonFunc onDelete={onDelete} onDisable={onDisable} />
    </li>
  );
}

export default LiElement;
