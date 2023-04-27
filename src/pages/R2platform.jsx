import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function R2platform() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              target="_blank"
              href="http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/R2%20platform%20%282%D1%85%D1%852%202mpx%2C%202xx0%29/IPC%20V5.4.81%20R2%20Release%20Note--External.pdf"
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC V5.4.81 R2 Release Note--External.pdf</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/R2%20platform%20%282%D1%85%D1%852%202mpx%2C%202xx0%29/IPC_R2_EN_STD_5.4.800_210813.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_R2_EN_STD_ 5.4.800_210813.zip</h5>
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

export default R2platform;
