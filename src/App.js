import Crear from "./components/Crear";
import Mostrar from "./components/Mostrar";

function App() {
  return (
    <div className="container text-center pt-4">
      <h1>CRUD React Context API - Reducer</h1>
      <div className="row">
        <div className="col-md-6 mt-5">
          <Crear></Crear>
        </div>
        <div className="col-md-6">
          <Mostrar></Mostrar>
        </div>
      </div>
    </div>
  );
}

export default App;
