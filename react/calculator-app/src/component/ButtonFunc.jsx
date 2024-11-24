function ButtonFunc({ onDelete, onDisable }) {
  return (
    <>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onDisable}>Disable</button>
    </>
  );
}

export default ButtonFunc;