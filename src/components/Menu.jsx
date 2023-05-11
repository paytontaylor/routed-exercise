import Chips from "./Chips";
import Honeybun from "./Honeybun";
import Snickers from "./Snickers";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div>
      <NavLink exact to="/chips">Chips</NavLink>
      <NavLink exact to="/honeybun">Honeybun</NavLink>
      <NavLink exact to="/snickers">Snickers</NavLink>
    </div>
  )
}

export default Menu;