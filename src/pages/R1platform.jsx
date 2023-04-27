import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

export default function R1platform() {
  return (
    <div> 
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r1"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>Baseline Firmware_IPC_Raptor series_En_V5.2.0 1..</h5>
            </Link>
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r2"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>Baseline Firmware_IPC_Raptor series_En_V5.3.0 1..</h5>
            </Link>
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r3"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>Baseline Firmware_IPC_Raptor series_En_V5.4.41 ..</h5>
            </Link>
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r4"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>Baseline Firmware_IPC_Raptor series_En_V5.4.5 1..</h5>
            </Link>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
