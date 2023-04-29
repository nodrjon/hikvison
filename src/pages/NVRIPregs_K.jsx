import React from "react";
import { Link } from "react-router-dom";

export default function NVRIPregs_K() {
  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            <Link
              to={"/Firmware/Hikvision/NVR (IP regs)/k/seria/1"}
              className="button_div2"
            >
              <h5>DS-76XXNI-K1/</h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/NVR (IP regs)/k/seria/2"}
              className="button_div2"
            >
              <h5>DS-76XXNI-K1(B)/ </h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/NVR (IP regs)/k/seria/3"}
              className="button_div2"
            >
              <h5>DS-76XXNI-K1(C)/ </h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/NVR (IP regs)/k/seria/4"}
              className="button_div2"
            >
              <h5>DS-7XXXNI-K2 K4/ </h5>
            </Link>
            <Link
              to={"/Firmware/Hikvision/NVR (IP regs)/k/seria/5"}
              className="button_div2"
            >
              <h5>DS-86XXNI-K8/ </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
