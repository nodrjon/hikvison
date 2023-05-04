import React from 'react';
import { Link } from 'react-router-dom';

function Alarm_PR(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PR Security Rader/1"} className='button_div2'>
                            <h5>DS-PR1-60/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PR Security Rader/2"} className='button_div2'>
                            <h5>DS-PRI120/ </h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Alarm_PR;