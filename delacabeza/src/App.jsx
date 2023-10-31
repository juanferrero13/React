import styles from "./app.module.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {

  return (
    <>
      <NavBar />

      <ItemListContainer greeting="Bienvenido a nuestra tienda!"/>
    </>
  );
}

export default App;
