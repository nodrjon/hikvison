import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_1() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/1"}
            className="button_div2"
          >
            <h5>KH6320-(W)TE1 8350 8520/  </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/2"}
            className="button_div2"
          >
            <h5>KH6320-LE1(B) KH6350 6360 -(TE1)/  </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/3"}
            className="button_div2"
          >
            <h5>KH6320WTDE1 6320TDE1 KIS302P/</h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/4"}
            className="button_div2"
          >
            <h5>KH9310 9510/ </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/1/5"}
            className="button_div2"
          >
            <h5>KH9310(B) 9510(B)/  </h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
