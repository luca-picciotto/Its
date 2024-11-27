function AddButton( { onAdd } ) { 
  return (
    <div>
      <button onClick={ onAdd }> Add Row </button>
    </div>
  );
}

export default AddButton;