import Navbar from "./components/navbar/Navbar";
import './App.css';
import HomePage from "./pages/home/HomePage";
import { Outlet } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
