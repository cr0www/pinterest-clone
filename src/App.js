import logo from "./pinterest-seeklogo.com.svg";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  let [activeHome, setActiveHome] = useState("non-active");
  let [activeCreate, setActiveCreate] = useState("non-active");
  function handleClickHome() {
    setActiveHome("active");
    setActiveCreate("non-active");
  }
  function handleClickCreate() {
    setActiveCreate("active");
    setActiveHome("non-active");
  }

  useEffect(() => {
    let pathname = window.location.pathname;
    if (pathname === "/") {
      setActiveHome("active");
      setActiveCreate("non-active");
    } else {
      setActiveCreate("active");
      setActiveHome("non-active");
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Pinterest logo" className="logo" />
        <Button directory="Home" active={activeHome} click={handleClickHome} />
        <Button
          directory="Create"
          active={activeCreate}
          click={handleClickCreate}
        />
        <Button directory="Profile" active="non-active" />
      </header>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/create" element={<h1>Create</h1>} />
      </Routes>
    </div>
  );
}

export default App;
