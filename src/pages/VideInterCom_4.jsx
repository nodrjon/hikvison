import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_4() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link

            to={"/Firmware/Hikvision/Video Intercom/4/1"}
            className="button_div2"
          >
            <h5>1. V1.5.1 NEW!/</h5>
          </Link>
          <Link

            to={"/Firmware/Hikvision/Video Intercom/4/2"}
            className="button_div2"
          >
            <h5>2. Old firmware/</h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
