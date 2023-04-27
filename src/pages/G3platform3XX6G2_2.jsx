import React from "react";
import { Link } from "react-router-dom";
import img from "../photo/img.png";

export default function G3platform3XX6G2_2() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div"> 
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/02.%203%20series%20-%203XXX/G3%20platform%20%283XX6G2%29/5.5.800%20build211009%20safe%20version/IPCG_G3_EN_STD_5.5.800_211009.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC G_G 3_EN _STD_5.5.800_210628.zip </h5>
            </a>
            <Link
              to={
                "/Firmware/Hikvision/IP Camera/3 series - 3XXX/G3 platform (3XX6G2)/5.5.800 build211009 safe version/text"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>model.txt</h5>
            </Link>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
