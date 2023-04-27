import React from "react";
import img from "../photo/img.png"


export default function R1platform_r1() {
  return (
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <a
            href={
              "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/03.%204%20series%20-%204XXX/R1%20platform%20%28discontinued%29/Baseline%20Firmware_IPC_Raptor%20series_En_V5.2.0%20140721%28Released%29/IPC_R1_EN_STD_5.2.0_140721.zip"
            }
            className="button_div2"
          >
            <i id="clear_" className="material-icons">
              clear
            </i>
            <h5>IPC_R1_EN  _STD_5.2 .0_140721.zip</h5>
          </a>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
