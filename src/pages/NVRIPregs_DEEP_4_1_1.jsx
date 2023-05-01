import React, { useState } from 'react'

export default function NVRIPregs_DEEP_4_1_1() {
    const [links, setLinks] = useState([
        {
          id: 1,
          title:
            "NVR_K21B1_H930_FA_BL_ML_STD_V4.61.205_221125.zip",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/04-4th%20generation/1-iDS-9600NXI-M/V4.61.205/NVR_K21B1_H930_FA_BL_ML_STD_V4.61.205_221125.zip",
        },
        {
          id: 2,
          title:
            "NVR_K21B1_H930_FA_SSD_BL_ML_STD_V4.61.205_221125.zip",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/04-4th%20generation/1-iDS-9600NXI-M/V4.61.205/NVR_K21B1_H930_FA_SSD_BL_ML_STD_V4.61.205_221125.zip",
        },
        {
          id: 3,
          title: "NVR_K21B1_H930_S_BL_ML_STD_V4.61.205_221125.zip",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/04-4th%20generation/1-iDS-9600NXI-M/V4.61.205/NVR_K21B1_H930_S_BL_ML_STD_V4.61.205_221125.zip",
        },
        {
          id: 4,
          title: "NVR_K21B1_H930_X_BL_ML_STD_V4.61.205_221125.zip",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/04-4th%20generation/1-iDS-9600NXI-M/V4.61.205/NVR_K21B1_H930_X_BL_ML_STD_V4.61.205_221125.zip",
        },
        {
          id: 5,
          title: "NVR_K21B1_H930_X_SSD_BL_ML_STD_V4.61.205_221125.zip",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/04-4th%20generation/1-iDS-9600NXI-M/V4.61.205/NVR_K21B1_H930_X_SSD_BL_ML_STD_V4.61.205_221125.zip",
        },
        {
          id: 6,
          title: "mapping_K21B1+KT2_V4.61.205_小超脑.xlsx ",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/04-4th%20generation/1-iDS-9600NXI-M/V4.61.205/mapping_K21B1%2BKT2_V4.61.205_%E5%B0%8F%E8%B6%85%E8%84%91.xlsx",
        },
      ]);
    
      return (
        <div>
          <div className="home_div">
            <div className="home_div2">
              <div className="button_div">
                {links?.map((s) => {
                  return (
                    <a
                      href={s.link}
                      className="button_div2"
                      key={s.id}
                    >
                      <h5>{s.title}</h5>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
}
