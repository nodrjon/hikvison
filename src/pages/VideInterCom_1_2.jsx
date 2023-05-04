import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_1_2() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/1"}
            className="button_div2"
          >
            <h5>V2.1.66_220926/     </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/2"}
            className="button_div2"
          >
            <h5>V2.2.2_221223/   </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/3"}
            className="button_div2"
          >
            <h5>V2.2.8_230219/ </h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
