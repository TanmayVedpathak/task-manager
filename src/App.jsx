import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import { ThemeButton } from "./components/ThemeButton/ThemeButton";

function App() {
  const click = () => {
    console.log("clicked")
  };

  return (
    <>
      {/* <h1 className='text-3xl font-bold underline' onClick={click}>Niffler</h1> */}
      <ThemeButton />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
