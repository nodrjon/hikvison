import React, { useState } from 'react'

export default function NVRIPregs_ISUPER() {
    const [links, setLinks] = useState([
        {
          id: 1,
          title:
            "External_NVR_V4.1.66 Release Notes.pdf",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/External_NVR_V4.1.66%20Release%20Notes.pdf",
        },
        {
          id: 2,
          title:
            "External_NVR_V4.40.500 Release Notes.pdf ",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/External_NVR_V4.40.500%20Release%20Notes.pdf",
        },
        {
          id: 3,
          title: "External_NVR_V4.51.110 Release notes.pdf  ",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/External_NVR_V4.51.110%20Release%20notes.pdf",
        },
        {
          id: 4,
          title: "External_NVR_V4.51.125 Release notes.pdf",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/External_NVR_V4.51.125%20Release%20notes.pdf",
        },
        {
          id: 5,
          title: "External_NVR_V4.51.127 Release notes.pdf  ",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/External_NVR_V4.51.127%20Release%20notes.pdf",
        },
        {
          id: 6,
          title: "NVR_X50_BL_ML_STD_V4.1.66_200103.zip  ",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/NVR_X50_BL_ML_STD_V4.1.66_200103.zip",
        },
        {
          id: 7,
          title: "NVR_X50_BL_ML_STD_V4.40.506_201218.zip ",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/NVR_X50_BL_ML_STD_V4.40.506_201218.zip",
        },
        {
          id: 8,
          title: "NVR_X50_BL_ML_STD_V4.51.100_210819.zip ",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/NVR_X50_BL_ML_STD_V4.51.100_210819.zip",
        },
        {
          id: 9,
          title: "NVR_X50_BL_ML_STD_V4.51.105_211027.zip ",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/NVR_X50_BL_ML_STD_V4.51.105_211027.zip",
        },
        {
          id: 10,
          title: "NVR_X50_BL_ML_STD_V4.51.116_220324.zip",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/NVR_X50_BL_ML_STD_V4.51.116_220324.zip",
        },
        {
          id: 11,
          title: "NVR_X50_BL_ML_STD_V4.51.125_220513.zip  ",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/NVR_X50_BL_ML_STD_V4.51.125_220513.zip",
        },
        {
          id: 6,
          title: "NVR_X50_BL_ML_STD_V4.51.127_220831.zip  ",
          link: "http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/07.%20I%20series%20super%20NVR%20128%20256%20channels/NVR_X50_BL_ML_STD_V4.51.127_220831.zip",
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
