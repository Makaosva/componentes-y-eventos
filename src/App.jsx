import "./App.css";
import Contador from "./components/Contador";
import MyInut from "./components/MyInput";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <div className="contador">
        <h2>Contador</h2>
        <Contador />
      </div>

      <div className="contador">
        <h2>Formulario</h2>
        <Formulario />
      </div>
    </>
  );
}

export default App;
