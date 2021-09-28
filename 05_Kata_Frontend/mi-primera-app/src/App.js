// import ClassSaludo from './components/Saludo';
import Navbar from './components/NavBar/Navbar';
import TextChange from './components/TextChange/TextChange';


function App() {
  return (
    <div className="App">
      <Navbar textAbuelo="El prop desde App" />
      <TextChange primary="Hola" />
      {/* <ClassSaludo name="Ricardo" />
      <ClassSaludo name="Samara"/>
      <ClassSaludo name="Valentina" />
      <ClassSaludo name="Andres" />
      <ClassSaludo name="Yann"/>
      <ClassSaludo name="Diego"/> */}
    </div>
  );
}

export default App;
