import React from 'react';
import { Link } from 'react-router-dom';

function Alarm_PR_1(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PR Security Rader/1/1"} className='button_div2'>
                            <h5>V1.0.2/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PR Security Rader/1/2"} className='button_div2'>
                            <h5>V1.0.6/ </h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Alarm_PR_1;