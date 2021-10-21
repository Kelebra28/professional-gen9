import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PokemonsView from './components/PokemonsView/PokemonsView';
import Formulario from "./components/Form/Form";

function App() {
  return (
    // Router es el componente que engloba toda la app para poder hacer rutas
    <Router>
      {/* Componetes globlaes */}
      <Navbar />
      {/* Route  es la ruta que vamos a hacer */}
      <Route exact path="/">
        <h2>Hola es mi app de Pokemon</h2>
      </Route>
      <Route exact path="/pokemon/view">
        <PokemonsView />
      </Route>
      <Route exact path='/formulario'>
        <Formulario />
      </Route>
    </Router>
      
    ) 
}

export default App;
