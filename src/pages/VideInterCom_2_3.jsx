import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_2_3() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/3/1"}
            className="button_div2"
          >
            <h5>KV6103 6113 8113 8213 8413(B)/ </h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/3/2"}
            className="button_div2"
          >
            <h5>KV6103 6113 8113 8213 8413(Discontinued)/</h5>
          </Link>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/3/3"}
            className="button_div2"
          >
            <h5>KV6103 6113 8113 8213 8413(С)/</h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
