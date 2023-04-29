import React from "react";
import { Link } from "react-router-dom";
import img from "../photo/img.png";

export default function G3platform3XX6G2_3() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2"> 
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/02.%203%20series%20-%203XXX/G3%20platform%20%283XX6G2%29/5.5.820%20build220520%20safe%20version/IPCG_G3_EN_STD_5.5.820_220520.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPCG_G3_EN _STD_5.5 .820_ 220520.zip</h5>
            </a>
            <Link
              to={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/02.%203%20series%20-%203XXX/G3%20platform%20%283XX6G2%29/5.5.820%20build220520%20safe%20version/Network%20CameraV5.5.820%20Release%20Note.pdf"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>Network CameraV5.5.820 Release Note.pdf</h5>
            </Link>
          </div>
           
        </div>
      </div>
    </div>
  );
}
