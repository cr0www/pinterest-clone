function Button({ directory, active, click }) {
  return (
    <button className={`btn ${active}`} onClick={click}>
      {directory}
    </button>
  );
}

export default Button;
