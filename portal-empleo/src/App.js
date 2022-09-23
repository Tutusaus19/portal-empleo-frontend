import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import './app.css';
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
