import React from "react";
import { Link } from "react-router-dom";
import img from "../photo/img.png";

export default function H0platform() { 
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/HBaseline"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>HBaseline Firmware_IPC_Raptor series_En_V5.4.5 1..</h5>
            </Link>
          </div>
           
        </div>
      </div>
    </div>
  );
}
