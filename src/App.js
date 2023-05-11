import { BrowserRouter, Route, NavLink } from "react-router-dom";
import VendingMachine from "./components/VendingMaching";
import Chips from "./components/Chips";
import Snickers from "./components/Snickers";
import Honeybun from "./components/Honeybun";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/snickers">
          <Snickers />
        </Route>
        <Route exact path="/honeybun">
          <Honeybun />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
