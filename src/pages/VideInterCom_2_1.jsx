import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_2_1() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/1/1"}
            className="button_div2"
          >
            <h5>DS-KB6004/</h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/1/2"}
            className="button_div2"
          >
            <h5>DS-KB8112/</h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/1/3"}
            className="button_div2"
          >
            <h5>DS-KB8113/</h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/1/3"}
            className="button_div2"
          >
            <h5>DS-KB8113(B)/</h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
