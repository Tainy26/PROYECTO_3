import "./Homeview.css";
import { Aside } from "../Aside/Aside.js";
import { Navbar } from "../Navbar/Navbar.js";
import { Gallery } from "../Gallery/Gallery.js";

export const Homeview = () => `
  <div class="parent">
    ${Aside()}
    ${Navbar()}
    <div id="main-content">
      ${Gallery()}
    </div>
  </div>
`;
