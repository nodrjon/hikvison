import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_4_2() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link

            to={"/Firmware/Hikvision/Video Intercom/4/2/1"}
            className="button_div2"
          >
            <h5>V1.4.71 baseline/   </h5>
          </Link>
          <Link

            to={"/Firmware/Hikvision/Video Intercom/4/2/2"}
            className="button_div2"
          >
            <h5>V1.5.0/ </h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
