import React from "react";
import img from "../photo/img.png";
import { Link } from "react-router-dom";

function DS2CV2Q21FDIW28mmW() {
  return (
    <div>
      <div>
        <div className="home_div">
          <div className="home_div2">
            <div className="button_div">
              <a
                href={
                  "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/WiFi%20camera%20with%20USB/DS-2CV2Q21FD-IW2.8mmW%20safe%20version/IPCTC_E6_EN_STD_5.5.800_210630.zip"
                }
                className="button_div2"
              >
                <i id="clear_" className="material-icons">
                  clear
                </i>
                <h5>DIPCTC_E6_EN_STD_ 5.5.800_210630.zip </h5>
              </a>
              <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/WiFi camera with USB/DS-2CV2Q21FD-IW2.8mmW safe version/model_txt"} className="button_div2">
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
    </div>
  );
}

export default DS2CV2Q21FDIW28mmW;
