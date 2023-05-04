import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_4_1() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <Link

            to={"/Firmware/Hikvision/Video Intercom/4/1/1"}
            className="button_div2"
          >
            <h5>Door Station/    </h5>
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
            <h5>Master Station/ </h5>
          </Link>
          <a

           href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/05.%20Video%20Intercom/008.%20First%20Gen%20intercom%20devices.%20OLD/1.%20V1.5.1%20NEW%21/Video%20Intercom%20Firmware%20V1.5.1%20Release%20Notes.docx"}
            className="button_div2"
          >
            <h5>Video Intercom Firmware V1.5.1 Release Notes.docx  </h5>
          </a>
          <a

           href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/05.%20Video%20Intercom/008.%20First%20Gen%20intercom%20devices.%20OLD/1.%20V1.5.1%20NEW%21/iVMS-4200_2.7.1.1%20for%20VIS1.5.1.exe"}
            className="button_div2"
          >
            <h5>iVMS-4200_2.7.1.1 for VIS1.5.1.exe  </h5>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
