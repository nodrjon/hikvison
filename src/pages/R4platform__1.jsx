import React from "react";
import img from "../photo/img.png"


export default function R4platform__1() {
  return (
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <a
            href={
              "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/03.%204%20series%20-%204XXX/R4%20platform%20%284XX5%20series%29/Baseline%20Firmware_IPC_Raptor%20series_En_V5.4.5%20170302/IPC_R4_ML_STD_5.4.5_170302.zip"
            }
            className="button_div2"
          >
            <i id="clear_" className="material-icons">
              clear
            </i>
            <h5>IPC_R4_ ML_S TD_5 .4.5_170302.zip </h5>
          </a>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

