function InputElement({value, disabled, onChange }) {
    const handleChange = (event) => {
        onChange(Number(event.target.value)); // Converte il valore in numero
      };
    return <input 
        type="number" 
        placeholder="Number" 
        value={value} // Imposta il valore dell'input
        onChange={handleChange} // Gestore del cambiamento  
        disabled={disabled} />; // Gestore della disabilitazione 
  }
  
  export default InputElement;