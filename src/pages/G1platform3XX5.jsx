import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function G1platform3XX5() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/02.%203%20series%20-%203XXX/G1%20platform%20%283XX5%29/IPC_G1_EN_STD_5.6.2_190701.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_G1_EN_STD_ 5.6.2_190701.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/02.%203%20series%20-%203XXX/G1%20platform%20%283XX5%29/IPC_G1_EN_STD_5.6.6_210625.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_G1_EN_STD_ 5.6.6_210625.zip</h5>
            </a>
            <a
              target="_blank"
              href="http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/02.%203%20series%20-%203XXX/G1%20platform%20%283XX5%29/V5.6.2%20Release%20Note.pdf"
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>V5.6.2 Release Note.pdf</h5>
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

export default G1platform3XX5;
