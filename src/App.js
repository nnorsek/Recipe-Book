import "./App.css";
import AppRoutes from "./AppRoutes.js";
import Navbar from "./Components/Navbar/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
