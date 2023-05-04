import React from 'react';
import { Link } from 'react-router-dom';

function Alarm_PWA32(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PWA32 Wireless Hub/1"} className='button_div2'>
                            <h5>V1.0.7 build201221/ </h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Alarm_PWA32;