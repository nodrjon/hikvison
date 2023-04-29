import React from "react";
import img from "../photo/img.png"
import { Link } from "react-router-dom";


export default function R7platform__1() {
  return (
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <a
            href={
              "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/03.%204%20series%20-%204XXX/R7%20platform%20%28H.265%204X26EFWD%2C%204BX6%2C%204CX6%2C%204DX6%2C%204A24FWD%29/V5.5.0%20170914%28Released%29ML%20Impossible%20to%20Downgrade/IPC_R7_EN_STD_5.5.0_170914.zip"
            }
            className="button_div2"
          >
            <i id="clear_" className="material-icons">
              clear
            </i>
            <h5>IPC_R7 _EN_STD_5.5. 0_1709  14.zip</h5>
          </a>
          <Link
            to={
              "/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/r7_1_text"
            }
            className="button_div2"
          >
            <i id="clear_" className="material-icons">
              clear
            </i>
            <h5>Warning-Impossilble to downgrade!!!!.txt</h5>
          </Link>
        </div>
         
      </div>
    </div>
  );
}

