import Provider from './Aplication';
import Login from './Components/Login';
import ShowGlobalState from './Components/ShowGlobalState';
import './App.css';

function App() {
  return (
    <Provider>
      <Login />
      <ShowGlobalState />
    </Provider>
  );
}

export default App;
