import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import { ThemeButton } from "./components/ThemeButton/ThemeButton";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export const LoginContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    if (!localStorage.getItem("isDarkTheme")) {
      if (darkThemeMq.matches) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);

      }
    } else {
      if (localStorage.getItem("isDarkTheme") == "true") {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      }
    }

  }, []);

  return (
    <>
      <LoginContext.Provider value={{ isLogin, setLogin }}>
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
          <ThemeButton />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Router>
        </ThemeContext.Provider>
      </LoginContext.Provider>
    </>
  )
}

export default App
