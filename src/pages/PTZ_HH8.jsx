import React from "react";
import { Link } from "react-router-dom";

export default function PTZ_HH8() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link to={'/Firmware/Hikvision/PTZ/H8 - DS-2DFxxxx(T5)/1'} className="button_div2">
              <h5>IPD_H8_EN_STD_5.7.9_220520.zip </h5>
            </Link>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/8.%20H8%20-%20DS-2DFxxxx%28T5%29/IPD_H8_EN_STD_5.7.9_220520.zip"
              }
              className="button_div2"
            >
              <h5>IPD_H8_EN_STD_5.7.9_220520.zip </h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/8.%20H8%20-%20DS-2DFxxxx%28T5%29/IPD_H8_EN_STD_5.8.0_221108.zip"
              }
              className="button_div2"
            >
              <h5>IPD_H8_EN_STD_5.8.0_221108.zip</h5>
            </a>
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/8.%20H8%20-%20DS-2DFxxxx%28T5%29/PTZ%20Camera%205.7.9%20Release%20Note%20--H8%28DF%29.pdf"
              }
              className="button_div2"
            >
              <h5>PTZ Camera 5.7.9 Release Note --H8(DF).pdf </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
