import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

export default function R7platform() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r7_1"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>V5.5.0 170914 (Released)ML Impossible to Downgr ade/</h5>
            </Link>
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r7_2"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>V5.5.86  200108 (Released)/ </h5>
            </Link>
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r7_3"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>V5.5.91 210429/</h5>
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
