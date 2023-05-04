import React from 'react';
import { Link } from 'react-router-dom';

function Alarm_PHA1_1_2(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1/2/1"} className='button_div2'>
                            <h5>H1/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1/2/2"} className='button_div2'>
                            <h5>H10/ </h5>
                        </Link>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/07.%20Alarm/DS-PHA%20Hybrid%20Security%20Control%20Panel/DS-PHA%20Hybrid%20Panel/V1.3.2%20build211021/DS-PHA%20Hybrid%20Panel%20V1.3.2%20Release%20Note.pdf"} className='button_div2'>
                            <h5>DS-PHA Hybrid Panel V1.3.2 Release Note.pdf</h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/07.%20Alarm/DS-PHA%20Hybrid%20Security%20Control%20Panel/DS-PHA%20Hybrid%20Panel/V1.3.2%20build211021/Hybrid%20Panel%20Corresponding%20Firmware.xlsx"} className='button_div2'>
                            <h5>Hybrid Panel Corresponding Firmware.xlsx </h5>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Alarm_PHA1_1_2;