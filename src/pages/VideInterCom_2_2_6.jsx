import React from 'react'
import { Link } from 'react-router-dom'

export default function VideInterCom_2_2_6() {
  return (
    <div>
    <div className="home_div">
      <div className="home_div2">
        <div className="button_div">
          <a
            href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/05.%20Video%20Intercom/002.%20Door%20station%20%28KV%20KD%20KB%29/KD%20Series/KD9463%209633/KD9633KP_FKP/ACS_DS-KDM9633_ST1_GML_GM_V1.0.2_build20220511.zip"}
            className="button_div2"
          >
            <h5>KD9633KP_FKP/ ACS_DS-KDM9633_ST1_GML_GM_V1.0.2_build20220511.zip </h5>
          </a>
          <a
            href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/05.%20Video%20Intercom/002.%20Door%20station%20%28KV%20KD%20KB%29/KD%20Series/KD9463%209633/V2.3.7_220711/VIS_OUTDOOR_R3_EN_STD_V2.3.7_220711.zip"}
            className="button_div2"
          >
            <h5>V2.3.7_220711/ VIS_OUTDOOR_R3_EN_STD_V2.3.7_220711.zip </h5>
          </a>
          <Link
            to={"/Firmware/Hikvision/Video Intercom/2/2/6/1"}
            className="button_div2"
          >
            <h5>V2.3.9_220208/  </h5>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
