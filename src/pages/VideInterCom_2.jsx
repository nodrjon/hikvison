import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_2() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/1"}
            className="button_div2"
          >
            <h5>KB Series/   </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2"}
            className="button_div2"
          >
            <h5>KD Series/    </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/3"}
            className="button_div2"
          >
            <h5>KV Series/</h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
