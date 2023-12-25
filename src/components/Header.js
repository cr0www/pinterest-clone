import logo from "../pinterest-seeklogo.com.svg";
import Button from "./Button";
import { useState, useEffect } from "react";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} alt="Pinterest logo" className="logo" />
      <Link to="/">
        <Button
          directory="Home"
          active={activeHome}
          click={() => handleClick("/")}
        />
      </Link>
      <Link to="/create">
        <Button
          directory="Create"
          active={activeCreate}
          click={() => handleClick("/create")}
        />
      </Link>
      <Link to={`/user/profile`}>
        <Button
          directory="Profile"
          active={activeAccount}
          click={() => handleClick("/user/profile")}
        />
      </Link>
    </header>
  );
}

export default Header;
