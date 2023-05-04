import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_2_2_2() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/1"}
            className="button_div2"
          >
            <h5>KD-DIS Display Module/   </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/2"}
            className="button_div2"
          >
            <h5>KD-KP KD-KK Other Module/  </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/3"}
            className="button_div2"
          >
            <h5>KD-M KD-E Card Module/ </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/4"}
            className="button_div2"
          >
            <h5>KD-TD Touch Display Module/ </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/5"}
            className="button_div2"
          >
            <h5>KD8003 Main Module/</h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
