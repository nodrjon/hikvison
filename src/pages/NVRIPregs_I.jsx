import React, { useState } from "react";

export default function NVRIPregs_I() {
  const [links, setLink] = useState([
    {
      id: 1,
      name: "External_NVR_V4.21.005 build 190509_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/External_NVR_V4.21.005%20build%20190509_Release%20Notes.pdf",
    },
    {
      id: 2,
      name: "External_NVR_V4.40.017 build 201124_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/External_NVR_V4.40.017%20build%20201124_Release%20Notes.pdf",
    },
    {
      id: 3,
      name: "External_NVR_V4.50.000 build 210125_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/External_NVR_V4.50.000%20build%20210125_Release%20Notes.pdf",
    },
    {
      id: 4,
      name: "External_NVR_V4.51.005 build 210628_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/External_NVR_V4.51.005%20build%20210628_Release%20Notes.pdf",
    },
    {
      id: 5,
      name: "External_NVR_V4.51.006 build 210708_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/External_NVR_V4.51.006%20build%20210708_Release%20Notes.pdf",
    },
    {
      id: 6,
      name: "External_NVR_V4.51.025 build 210927_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/External_NVR_V4.51.025%20build%20210927_Release%20Notes.pdf",
    },
    {
      id: 7,
      name: "External_NVR_V4.60.005 build 220108_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/External_NVR_V4.60.005%20build%20220108_Release%20Notes.pdf",
    },
    {
      id: 8,
      name: "External_NVR_V4.61.000 build 220507_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/External_NVR_V4.61.000%20build%20220507_Release%20Notes.pdf",
    },
    {
      id: 9,
      name: "External_NVR_V4.61.010 build 220527_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/External_NVR_V4.61.010%20build%20220527_Release%20Notes.pdf",
    },
    {
      id: 10,
      name: "External_NVR_V4.61.020 build 220708_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/External_NVR_V4.61.020%20build%20220708_Release%20Notes.pdf",
    },
    {
      id: 11,
      name: "External_NVR_V4.61.025 build 220905_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/External_NVR_V4.61.025%20build%20220905_Release%20Notes.pdf",
    },
    {
      id: 12,
      name: "NVR_K51_BL_ML_STD_V4.22.005_191208.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.22.005_191208.zip",
    },
    {
      id: 13,
      name: "NVR_K51_BL_ML_STD_V4.40.017_201124.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.40.017_201124.zip",
    },
    {
      id: 14,
      name: "NVR_K51_BL_ML_STD_V4.50.000_210125.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.50.000_210125.zip",
    },
    {
      id: 15,
      name: "NVR_K51_BL_ML_STD_V4.50.010_210322.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.50.010_210322.zip",
    },
    {
      id: 16,
      name: "NVR_K51_BL_ML_STD_V4.51.005_210628.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.51.005_210628.zip",
    },
    {
      id: 17,
      name: "NVR_K51_BL_ML_STD_V4.51.006_210708.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.51.006_210708.zip",
    },
    {
      id: 18,
      name: "NVR_K51_BL_ML_STD_V4.51.025_210927.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.51.025_210927.zip",
    },
    {
      id: 19,
      name: "NVR_K51_BL_ML_STD_V4.60.005_220108.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.60.005_220108.zip",
    },
    {
      id: 20,
      name: "NVR_K51_BL_ML_STD_V4.61.000_220507.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.61.000_220507.zip",
    },
    {
      id: 21,
      name: "NVR_K51_BL_ML_STD_V4.61.010_220527.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.61.010_220527.zip",
    },
    {
      id: 22,
      name: "NVR_K51_BL_ML_STD_V4.61.020_220708.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.61.020_220708.zip",
    },
    {
      id: 23,
      name: "NVR_K51_BL_ML_STD_V4.61.025_220905.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.61.025_220905.zip",
    },
    {
      id: 24,
      name: "NVR_K51_BL_ML_STD_V4.61.025_230421.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_K51_BL_ML_STD_V4.61.025_230421.zip",
    },
    {
      id: 25,
      name: "NVR_V4.61.025 build220905_Release Notes.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/02.%20I%20series/NVR_V4.61.025%20build220905_Release%20Notes.pdf",
    },
  ]);

  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            {links?.map((s, idx) => {
              return (
                <a
                key={s.id}
                  href={
                    s.link
                  }
                  className="button_div2"
                >
                  <h5>{s.name}</h5>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
