import { createContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Outlet } from "react-router-dom";
export const Dark = createContext(false);

function App() {
  const storedDarkMode = JSON.parse(
    localStorage.getItem("darkMode") || "false"
  );
  const [darkMode, setDarkMode] = useState<boolean>(storedDarkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : "normal"}>
      <Dark.Provider value={darkMode}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Outlet />
      </Dark.Provider>
    </div>
  );
}

export default App;
