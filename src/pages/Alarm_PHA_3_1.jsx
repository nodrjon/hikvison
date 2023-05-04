import React from 'react';
import { Link } from 'react-router-dom';

function Alarm_PHA_3_1(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1/1"} className='button_div2'>
                            <h5>Tri-X Receiver/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1/2"} className='button_div2'>
                            <h5>Wired Input Expander/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1/3"} className='button_div2'>
                            <h5>Wired LCD Keypad/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1/4"} className='button_div2'>
                            <h5>Wired Output Expander/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3/1/5"} className='button_div2'>
                            <h5>Wired PIRCAM/ </h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alarm_PHA_3_1;