import React from "react";
import { Link } from "react-router-dom";

export default function PTZ_HH8_1() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={"/Firmware/Hikvision/PTZ/H8 - DS-2DFxxxx(T5)/1/1"}
              className="button_div2"
            >
              <h5>星光非全量包(darkfighter)/ </h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/PTZ/H8 - DS-2DFxxxx(T5)/1/2"}
              className="button_div2"
            >
              <h5>黑光非全量包(darkfighterX型号带MH)/ </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
