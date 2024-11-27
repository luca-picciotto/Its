function SelectOption({value, onOperatorChange }) {
  const handleChange = (event) => {
    onOperatorChange(event.target.value);
  };
    return (
      <select value={value} onChange={handleChange}>
        <option >+</option>
        <option>-</option>
        <option>*</option>
      </select>
    );
}

export default SelectOption;