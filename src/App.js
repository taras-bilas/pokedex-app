import "./App.css";
import { Header } from "./components/Header/Header";
import { PokemonList } from "./components/PokemonList/PokemonList";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <PokemonList />
      </div>
    </>
  );
}

export default App;
