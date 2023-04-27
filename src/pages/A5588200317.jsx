import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function A5588200317() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              target="_blank"
              href="http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G0%20platform%20%282X47G3E%202X4%2751G1-IDW1%272%29/5.5.88%20200317/IPC%20G0%20V5.5.88%20Release%20Note.pdf"
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC G0 V5.5.88 Release Note.pdf</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G0%20platform%20%282X47G3E%202X4%2751G1-IDW1%272%29/5.5.88%20200317/IPC_G0_EN_STD_5.5.88_200317.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_G0_EN_STD_ 5.5.88_200317.zip</h5>
            </a>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default A5588200317;
