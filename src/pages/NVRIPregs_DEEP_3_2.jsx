import React, { useState } from "react";

export default function NVRIPregs_DEEP_3_2() {
  const [links, setLinks] = useState([
    {
      id: 1,
      title:
        "3rd generation of DeepinMind NVR V4.40.720_210311 Release Notes.docx",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/03-3rd%20generation/iDS-9600NXI%20%28C%29_iDS-7700NXI%20%28C%29/3rd%20generation%20of%20DeepinMind%20NVR%20V4.40.720_210311%20Release%20Notes.docx",
    },
    {
      id: 2,
      title:
        "3rd generation of DeepinMind NVR V4.40.720_210311 Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/03-3rd%20generation/iDS-9600NXI%20%28C%29_iDS-7700NXI%20%28C%29/3rd%20generation%20of%20DeepinMind%20NVR%20V4.40.720_210311%20Release%20Notes.pdf",
    },
    {
      id: 3,
      title: "NVR_K51_H930_S_BL_ML_STD_V4.40.720_210311.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/03-3rd%20generation/iDS-9600NXI%20%28C%29_iDS-7700NXI%20%28C%29/NVR_K51_H930_S_BL_ML_STD_V4.40.720_210311.zip",
    },
    {
      id: 4,
      title: "NVR_K51_H930_S_BL_ML_STD_V4.61.025_220826.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/03-3rd%20generation/iDS-9600NXI%20%28C%29_iDS-7700NXI%20%28C%29/NVR_K51_H930_S_BL_ML_STD_V4.61.025_220826.zip",
    },
    {
      id: 5,
      title: "NVR_K51_H930_X_BL_ML_STD_V4.40.720_210311.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/03-3rd%20generation/iDS-9600NXI%20%28C%29_iDS-7700NXI%20%28C%29/NVR_K51_H930_X_BL_ML_STD_V4.40.720_210311.zip",
    },
    {
      id: 6,
      title: "NVR_K51_H930_X_BL_ML_STD_V4.61.025_220826.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/06.%20DeepinMind/03-3rd%20generation/iDS-9600NXI%20%28C%29_iDS-7700NXI%20%28C%29/NVR_K51_H930_X_BL_ML_STD_V4.61.025_220826.zip",
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
