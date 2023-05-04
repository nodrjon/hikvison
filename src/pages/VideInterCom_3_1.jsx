import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_3_1() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link
            to={"/Firmware/Hikvision/Video Intercom/3/1/1"}
            className="button_div2"
          >
            <h5>V1.0.32_build210926/ </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/3/1/2"}
            className="button_div2"
          >
            <h5>V1.0.34_build220223/</h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/3/1/3"}
            className="button_div2"
          >
            <h5>V1.0.34_build220521/</h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/3/1/4"}
            className="button_div2"
          >
            <h5>V1.0.36_build220619/</h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
