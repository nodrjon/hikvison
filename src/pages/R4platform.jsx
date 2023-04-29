import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

export default function R4platform() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r4_1"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>Baseline Firmware_IPC_Raptor series_En_V5.4.5 1</h5>
            </Link>
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r4_2"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>Baseline Firmware_IPC_Raptor series_En_V5.4.5 1..</h5>
            </Link>
          </div>
           
        </div>
      </div>
    </div>
  );
}
