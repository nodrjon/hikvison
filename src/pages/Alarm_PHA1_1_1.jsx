import React from 'react';
import { Link } from 'react-router-dom';

function Alarm_PHA1_1_1(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/1/1/1"} className='button_div2'>
                            <h5>H1/ </h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Alarm_PHA1_1_1;