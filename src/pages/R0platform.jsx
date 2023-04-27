import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function R0platform() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              target="_blank"
              href="http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/R0%20platform%20%282xx2%29/Firmware%20%20V5.4.5%20Release%20Note--External.pdf"
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>Firmware V5.4.5 Release Note--External.pdf </h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/R0%20platform%20%282xx2%29/IPC_R0_EN_STD_5.2.0_140721.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_R0_EN_STD_ 5.2.0_140721.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/R0%20platform%20%282xx2%29/IPC_R0_EN_STD_5.3.0_151016.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_R0_EN_STD_ 5.3.0_151016.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/R0%20platform%20%282xx2%29/IPC_R0_EN_STD_5.4.0_160530.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_R0_EN_STD_ 5.4.0_160530.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/R0%20platform%20%282xx2%29/IPC_R0_EN_STD_5.4.800_210813.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_R0_EN_STD_ 5.4.800_210813.zip </h5>
            </a>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default R0platform;
