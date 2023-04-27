import React, { useEffect } from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function Firmware_IPC_Raptorseries_En_V5582190220() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2"> 
          <div className="button_div">

            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/R6%20platform%20%282X22FWD%2C%202X42FWD%29/Firmware_IPC_Raptor%20series_En_V5.5.82%20190220/IPC_R6_EN_STD_5.5.82_190220.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC _R6_ EN_S TD_5.5.8 2_190220.zip</h5>
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

export default Firmware_IPC_Raptorseries_En_V5582190220;
