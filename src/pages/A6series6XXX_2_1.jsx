import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function A6series6XXX_2_1() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/6 series - 6XXX/H3 platform (DS-2CD6DX4_6924)/p1"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>DS-2CD6924/ </h5>
            </Link>
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/6 series - 6XXX/H3 platform (DS-2CD6DX4_6924)/p2"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>DS-2CD6DX4/  </h5>
            </Link>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default A6series6XXX_2_1;
