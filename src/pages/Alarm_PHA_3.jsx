import React from 'react';
import { Link } from 'react-router-dom';

function Alarm_PHA_3(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1"} className='button_div2'>
                            <h5>Companion Peripheral Firmware/ </h5>
                        </Link>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/07.%20Alarm/DS-PHA%20Hybrid%20Pro%20Security%20Control%20Panel/1.0.3%20build230107/AX%20Hybrid%20PRO%20V1.0.3%20Release%20Note.pdf"} className='button_div2'>
                            <h5>AX Hybrid PRO V1.0.3 Release Note.pdf </h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/07.%20Alarm/DS-PHA%20Hybrid%20Pro%20Security%20Control%20Panel/1.0.3%20build230107/HIA_HYBRID_H14_EN_STD_V1.0.3_build230107.zip"} className='button_div2'>
                            <h5>HIA_HYBRID_H14_EN_STD_V1.0.3_build230107.zip </h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/07.%20Alarm/DS-PHA%20Hybrid%20Pro%20Security%20Control%20Panel/1.0.3%20build230107/HIA_HYBRID_H14_RU_ML_STD_V1.0.3_build230107.zip"} className='button_div2'>
                            <h5>HIA_HYBRID_H14_RU_ML_STD_V1.0.3_build230107.zip </h5>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Alarm_PHA_3;