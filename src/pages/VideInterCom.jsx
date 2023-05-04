import React from "react";
import { Link } from "react-router-dom";

export default function VideInterCom() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={"/Firmware/Hikvision/Video Intercom/1"}
              className="button_div2"
            >
              <h5>001. Indoor station (KH)/ </h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/Video Intercom/2"}
              className="button_div2"
            >
              <h5>002. Door station (KV KD KB)/   </h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/Video Intercom/3"}
              className="button_div2"
            >
              <h5>003. Main Station (KM)/ </h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/Video Intercom/4"}
              className="button_div2"
            >
              <h5>008. First Gen intercom devices. OLD/</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
