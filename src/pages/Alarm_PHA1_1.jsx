import React from 'react';
import { Link } from 'react-router-dom';

function Alarm_PHA1_1(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1/1"} className='button_div2'>
                            <h5>V1.3.1 build210309/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1/2"} className='button_div2'>
                            <h5>V1.3.2 build211021/ </h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Alarm_PHA1_1;