import { Link } from "react-router-dom";

function Button({ directory, active, click }) {
  return (
    <Link to={directory} className={`btn ${active}`} onClick={click}>
      {directory}
    </Link>
  );
}

export default Button;
