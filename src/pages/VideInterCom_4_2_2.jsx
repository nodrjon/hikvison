import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_4_2_2() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link

            to={"/Firmware/Hikvision/Video Intercom/4/1/1"}
            className="button_div2"
          >
            <h5>Door Station(D series)/ </h5>
          </Link>
          <Link

            to={"/Firmware/Hikvision/Video Intercom/4/1/2"}
            className="button_div2"
          >
            <h5>Indoor Station/ </h5>
          </Link>
          <Link

            to={"/Firmware/Hikvision/Video Intercom/4/1/3"}
            className="button_div2"
          >
            <h5>Villa Door Station(V series)/     </h5>
          </Link>
          <a

           href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/05.%20Video%20Intercom/008.%20First%20Gen%20intercom%20devices.%20OLD/2.%20Old%20firmware/V1.5.0/BatchConfigTool.exe"}
            className="button_div2"
          >
            <h5>BatchConfigTool.exe   </h5>
          </a>
          <a

           href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/05.%20Video%20Intercom/008.%20First%20Gen%20intercom%20devices.%20OLD/2.%20Old%20firmware/V1.5.0/Video%20Intercom%20Firmware%20V1.5.0%20Release%20Notes.docx"}
            className="button_div2"
          >
            <h5>Video Intercom Firmware V1.5.0 Release Notes.docx  </h5>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
