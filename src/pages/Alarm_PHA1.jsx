import React from 'react';
import { Link } from 'react-router-dom';

function Alarm_PHA1(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1"} className='button_div2'>
                            <h5>DS-PHA Hybrid Panel/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/2"} className='button_div2'>
                            <h5>DS-PK-L Wired LCD Keypad/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/3"} className='button_div2'>
                            <h5>DS-PKG Wired LED Keypad/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/4"} className='button_div2'>
                            <h5>DS-PM-RSWR Wireless Receiver/ </h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Alarm_PHA1;