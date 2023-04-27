import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function A5712() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/E8%20platform%20%282CD2X23G0E%28B%29%29/5.7.12/IPCE_E8_EN_STD_5.7.12_220819.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPCE_E8_EN_STD_ 5.7.12_220819.zip dae</h5>
            </a>
            <a
              target="_blank"
              href="http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/E8%20platform%20%282CD2X23G0E%28B%29%29/5.7.12/IPC_E8-V5.7.12_SP%20Release%20Note--EN.pdf"
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_E8-V5.7.12_SP Release Note--EN.pdf</h5>
            </a>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default A5712;
