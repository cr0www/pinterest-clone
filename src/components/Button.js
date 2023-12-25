function Button({ directory, active }) {
  return <button className={`btn ${active}`}>{directory}</button>;
}

export default Button;
