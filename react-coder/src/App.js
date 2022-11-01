import { useSlotProps } from "@mui/base";
import "../src/styles/styles.scss";
// import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <>
      <div className="App">
        <NavBar color="accent"></NavBar>
      </div>
    </>
  );
}

export default App;
