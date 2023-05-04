import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_1_4() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/4/1"}
            className="button_div2"
          >
            <h5>V2.1.28_build210803 Protocol2.0/    </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/4/2"}
            className="button_div2"
          >
            <h5>V2.1.78_build221209 Protocol2.0/ </h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
