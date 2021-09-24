import ClassSaludo from './components/Saludo';
import Navbar from './components/NavBar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ClassSaludo name="Ricardo" />
      <ClassSaludo name="Samara"/>
      <ClassSaludo name="Valentina" />
      <ClassSaludo name="Andres" />
      <ClassSaludo name="Yann"/>
      <ClassSaludo name="Diego"/>
    </div>
  );
}

export default App;
