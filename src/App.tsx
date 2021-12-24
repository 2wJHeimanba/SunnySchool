
import { Routes,Route } from "react-router-dom"
import './App.css';
import Login from "./pages/login"
import Resiger from "./pages/register";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Resiger />} />
      </Routes>
    </div>
  );
}

export default App;
