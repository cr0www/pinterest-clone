import logo from "../pinterest-seeklogo.com.svg";
import Button from "./Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();
  let [activeHome, setActiveHome] = useState("non-active");
  let [activeCreate, setActiveCreate] = useState("non-active");
  let [activeAccount, setActiveAccount] = useState("non-active");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveHome("active");
        setActiveAccount("non-active");
        setActiveCreate("non-active");
        break;
      case "/create":
        setActiveHome("non-active");
        setActiveAccount("non-active");
        setActiveCreate("active");
        break;
      case "/user/profile":
        setActiveHome("non-active");
        setActiveAccount("active");
        setActiveCreate("non-active");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <header className="App-header">
      <img src={logo} alt="Pinterest logo" className="logo" />
      <Link to="/">
        <Button directory="Home" active={activeHome} />
      </Link>
      <Link to="/create">
        <Button directory="Create" active={activeCreate} />
      </Link>
      <Link to="/user/profile">
        <Button directory="Profile" active={activeAccount} />
      </Link>
    </header>
  );
}

export default Header;
