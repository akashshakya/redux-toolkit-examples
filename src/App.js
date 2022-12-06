import './App.css';
import Todo from './redux-API-eg/features/Todo';
import Counter from './redux-app/features/counter/Counter';
import ShowPokemon from './RTK-QueryAPP/services/ShowPokemon';


function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ShowPokemon/>   */}
      <Todo/>
    </div>
  );
}

export default App;
