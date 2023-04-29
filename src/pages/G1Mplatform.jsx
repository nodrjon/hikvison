import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function G1Mplatform() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G1%2BM%20platform%20%282XX6G1%29/IPCM_G1_EN_STD_5.6.0_190507.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPCM_G1_EN_STD_ 5.6.0_190507.zip</h5>
            </a>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default G1Mplatform;
