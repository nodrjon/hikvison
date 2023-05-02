import React from "react";
import { Link } from "react-router-dom";

export default function NVRIPregs_MODEL_15() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={"/Firmware/Hikvision/NVR (IP regs)/models/15/1"}
              className="button_div2"
            >
              <h5>V3.2.8 build161230 English+ Multi language/ </h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/NVR (IP regs)/models/15/2"}
              className="button_div2"
            >
              <h5>V3.2.9 build170329/  </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
