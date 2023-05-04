import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_1_5() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/5/1"}
            className="button_div2"
          >
            <h5>V2.1.48_build220620/  </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/5/2"}
            className="button_div2"
          >
            <h5>V2.1.74_build221110/   </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/5/3"}
            className="button_div2"
          >
            <h5>V2.1.80_build230320/</h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
