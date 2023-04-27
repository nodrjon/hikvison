import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function V5711220913() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <a
              href={
                "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G5%20platform%20%282xx3G2%202xx6G2%28C%29%202xx7G2%28C%29/V5.7.11_220913/IPC_G5_EN_STD_5.7.11_220913.zip"
              }
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>IPC_G5_EN_STD_5. 7.11_220913.zip</h5>
            </a>
            <a
              target="_blank"
              href="http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G5%20platform%20%282xx3G2%202xx6G2%28C%29%202xx7G2%28C%29/V5.7.11_220913/Network%20Camera-V5.7.11%20Release%20Note-G5.pdf"
              className="button_div2"
            >
              <i id="clear_" className="material-icons">
                clear
              </i>
              <h5>Network Camera-V5.7.11 Release Note-G5.pdf</h5>
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

export default V5711220913;
