import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function R0Fisheye() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/R0%20Fisheye%28DS-2CD2942F-I%28W%29%28S%29%29/IPC_R0_EN_STD_5.4.41_170309.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_R0_EN_STD_ 5.4.41_170309.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/R0%20Fisheye%28DS-2CD2942F-I%28W%29%28S%29%29/IPC_R0_EN_STD_5.4.5_170208.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_R0_EN_STD_ 5.4.5_170208.zip</h5>
            </a>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default R0Fisheye;
