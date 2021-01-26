import './css/MenuPanel.css'
import ControlsMenu from "./ControlsMenu";
import SortBy from "../sortby/SortBy";

function MenuPanel() {
  return (
    <div className="controls container">
      <ControlsMenu />
      <SortBy />
    </div>
  )
}

export default MenuPanel
