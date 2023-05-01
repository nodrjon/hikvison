import React, { useState } from "react";

export default function NVRIPregs_ACU_1() {
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "NVR_K51_A8_X_BL_ML_STD_V4.40.805_210128.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/NVR_K51_A8_X_BL_ML_STD_V4.40.805_210128.zip",
    },
    {
      id: 2,
      title: "NVR_K51_A8_X_BL_ML_STD_V4.60.105_220118.zip ",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/NVR_K51_A8_X_BL_ML_STD_V4.60.105_220118.zip",
    },
    {
      id: 3,
      title: "NVR_K51_A8_X_BL_ML_STD_V4.61.000_220507.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/NVR_K51_A8_X_BL_ML_STD_V4.61.000_220507.zip",
    },
    {
      id: 4,
      title: "NVR_K51_A8_X_BL_ML_STD_V4.61.020_220707.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/NVR_K51_A8_X_BL_ML_STD_V4.61.020_220707.zip",
    },
    {
      id: 5,
      title: "NVR_K51_A8_X_BL_ML_STD_V4.61.066_220920.zip ",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/NVR_K51_A8_X_BL_ML_STD_V4.61.066_220920.zip",
    },
    {
      id: 6,
      title: "NVR_K51_A8_X_BL_ML_STD_V4.61.067_220928.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/NVR_K51_A8_X_BL_ML_STD_V4.61.067_220928.zip",
    },
    {
      id: 7,
      title: "NVR_K51_A8_X_BL_ML_STD_V4.62.200_230105.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/NVR_K51_A8_X_BL_ML_STD_V4.62.200_230105.zip",
    },
    {
      id: 8,
      title: "NVR_K51_A8_X_BL_ML_STD_V4.62.205_230220.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/NVR_K51_A8_X_BL_ML_STD_V4.62.205_230220.zip",
    },
    {
      id: 9,
      title: "V4.51.200 A8 AcuSense NVR release note.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/V4.51.200%20A8%20AcuSense%20NVR%20release%20note.pdf",
    },
    {
      id: 10,
      title: "V4.60.100 A8 AcuSense NVR release note.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/V4.60.100%20A8%20AcuSense%20NVR%20release%20note.pdf",
    },
    {
      id: 11,
      title: "V4.60.105 A8 AcuSense NVR release note.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/#:~:text=V4.60.105%20A8%20AcuSense%20NVR%20release%20note.pdf",
    },
    {
      id: 12,
      title: "V4.61.020 A8 AcuSence NVR release note.pdf ",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/V4.61.020%20A8%20AcuSence%20NVR%20release%20note.pdf",
    },
    {
      id: 13,
      title: "V4.61.066 A8 AcuSence NVR release note.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/V4.61.066%20A8%20AcuSence%20NVR%20release%20note.pdf",
    },
    {
      id: 14,
      title: "V4.61.067 A8 AcuSence NVR release note.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/V4.61.067%20A8%20AcuSence%20NVR%20release%20note.pdf",
    },
    {
      id: 15,
      title: "V4.62.200 A8 AcuSence NVR release note.pdf",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/V4.62.200%20A8%20AcuSence%20NVR%20release%20note.pdf",
    },
    {
      id: 16,
      title: "V4.62.205 A8 AcuSense NVR release note.pdf ",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/05.%20AcuSence/K51_A8/V4.62.205%20A8%20AcuSense%20NVR%20release%20note.pdf",
    },
  ]);

  return (
    <div>
      <div className="home_div">
        <div className="home_div2">
          <div className="button_div">
            {links?.map((s) => {
              return (
                <a href={s.link} className="button_div2" key={s.id}>
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
