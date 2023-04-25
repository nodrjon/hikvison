import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function DS2CD2U212Q21() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/WiFi%20camera%20with%20USB/DS-2CD2U21_2Q21/DS-2CD2U21_2Q21_STD_5.4.800_210820.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>DS-2CD2U21_2Q21_STD_ 5.4.800_210820.zip </h5>
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

export default DS2CD2U212Q21;
