import React, { useState } from "react";

export default function NVRIPregs_MODEL_16() {
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "DVR V3.1.6_build170613 Release Notes_External.pdf ",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/08.%20Old%20models/Support%20Hik-Connect/DVR%20V3.1.6_build170613%20Release%20Notes_External.pdf",
    },
    {
      id: 2,
      title: "DVR_K31_RUSSIA-ML_STD_V3.1.6_build170613.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/08.%20Old%20models/Support%20Hik-Connect/DVR_K31_RUSSIA-ML_STD_V3.1.6_build170613.zip",
    },
    {
      id: 3,
      title: "DVR_K32_RUSSIA-ML_STD_V3.1.6_build170613.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/08.%20Old%20models/Support%20Hik-Connect/DVR_K32_RUSSIA-ML_STD_V3.1.6_build170613.zip",
    },
    {
      id: 4,
      title: "DVR_K33_K35_RUSSIA-ML_STD_V3.1.6_build170613.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/08.%20Old%20models/Support%20Hik-Connect/DVR_K33_K35_RUSSIA-ML_STD_V3.1.6_build170613.zip",
    },
    {
      id: 5,
      title: "DVR_K34_RUSSIA-ML_STD_V3.1.6_build170613.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/08.%20Old%20models/Support%20Hik-Connect/DVR_K34_RUSSIA-ML_STD_V3.1.6_build170613.zip",
    },
    {
      id: 6,
      title: "DVR_KN31_RUSSIA-ML_STD_V3.1.6_build170613.zip ",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/08.%20Old%20models/Support%20Hik-Connect/DVR_KN31_RUSSIA-ML_STD_V3.1.6_build170613.zip",
    },
    {
      id: 7,
      title: "DVR_KN32_RUSSIA-ML_STD_V3.1.6_build170613.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/08.%20Old%20models/Support%20Hik-Connect/DVR_KN32_RUSSIA-ML_STD_V3.1.6_build170613.zip",
    },
    {
      id: 8,
      title: "DVR_KN33_KN35_N20_RUSSIA-ML_STD_V3.1.6_build170613.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/08.%20Old%20models/Support%20Hik-Connect/DVR_KN33_KN35_N20_RUSSIA-ML_STD_V3.1.6_build170613.zip",
    },
    {
      id: 9,
      title: "DVR_KN34_RUSSIA-ML_STD_V3.1.6_build170613.zip",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/08.%20Old%20models/Support%20Hik-Connect/DVR_KN34_RUSSIA-ML_STD_V3.1.6_build170613.zip",
    },
    {
      id: 10,
      title: "How choose firmware.xlsx ",
      link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/08.%20Old%20models/Support%20Hik-Connect/How%20choose%20firmware.xlsx",
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
                  key={s.id
                  }
                  className="button_div2"
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
