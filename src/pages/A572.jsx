import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function A572() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/E8%20platform%20%282CD2X23G0E%28B%29%29/5.7.2/IPCE_E8_EN_STD_5.7.2_220113.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPCE_E8_EN_STD_ 5.7.2_220113.zip </h5>
            </a>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default A572;
