import logo from "./pinterest-seeklogo.com.svg";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  let [activeHome, setActiveHome] = useState("non-active");
  let [activeCreate, setActiveCreate] = useState("non-active");
  let [activeAccount, setActiveAccount] = useState("non-active");
  function handleClickHome() {
    setActiveHome("active");
    setActiveCreate("non-active");
    setActiveAccount("non-active");
  }
  function handleClickCreate() {
    setActiveCreate("active");
    setActiveHome("non-active");
    setActiveAccount("non-active");
  }
  function handleClickAccount() {
    setActiveAccount("active");
    setActiveHome("non-active");
    setActiveCreate("non-active");
  }

  function handleClick(btn) {}

  useEffect(() => {
    let pathname = window.location.pathname;
    if (pathname === "/") {
      setActiveHome("active");
      setActiveCreate("non-active");
      setActiveAccount("non-active");
    } else if (pathname === "/create") {
      setActiveCreate("active");
      setActiveHome("non-active");
      setActiveAccount("non-active");
    } else {
      setActiveAccount("active");
      setActiveHome("non-active");
      setActiveCreate("non-active");
    }
  }, []);

  return (
    <div className="App">
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
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/create" element={<h1>Create</h1>} />
        <Route path="/user/*" element={<h1>Profile</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
