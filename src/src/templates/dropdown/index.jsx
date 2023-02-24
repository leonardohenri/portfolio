import {Menu} from "../../components/Dropdown/menu"
import { AudioPhile, DataBiz, Maker, Meet } from "../../components/Dropdown/icons/icons";
import "./dropdown.css"



export const Dropdown = () =>{
  return(
    <div className="DDbody">
      <Menu/>
      <div className="DDgrid">
        <div className="DDcolumn-one">
          <h1>Make remote work</h1>
          <p> Get your team in sync, no matter your location. Streamline processes,
              create team rituals, and watch productivity soar.</p>
          <button className="DDbtn">Learn more</button>
          <div className="DDcontent">
            <DataBiz/>
            <AudioPhile/>
            <Meet/>
            <Maker/>
          </div>
        </div>
        <div className="DDcolumn-two">
          <div className="DDdivImage"></div>
        </div>
      </div>
    </div>
  );
}