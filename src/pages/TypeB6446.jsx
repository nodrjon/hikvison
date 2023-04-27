import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function TypeB6446() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/TypeB%286446%29/Hikvision%20Firmware_IPC_TypeB%20series_En_V2.0%20110614.rar"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>Hikvision Firmware_IPC_TypeB series_En_V2.0 110..</h5>
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

export default TypeB6446;
