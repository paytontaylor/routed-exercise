import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom";
import Menu from "./Menu";
import Snickers from "./Snickers";
import Chips from "./Chips";
import Honeybun from "./Honeybun";

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <Menu />
    </div>
  )
}

export default VendingMachine;