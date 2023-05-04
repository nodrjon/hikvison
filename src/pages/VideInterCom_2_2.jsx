import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_2_2() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/1"}
            className="button_div2"
          >
            <h5>KD3003 8103 8023/  </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/2"}
            className="button_div2"
          >
            <h5>KD8003/</h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/3"}
            className="button_div2"
          >
            <h5>KD8003(-B)/ </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/4"}
            className="button_div2"
          >
            <h5>KD8013-IME6 / </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/5"}
            className="button_div2"
          >
            <h5>KD9203/</h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/6"}
            className="button_div2"
          >
            <h5>KD9463 9633/ </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/7"}
            className="button_div2"
          >
            <h5>KD9613/</h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
