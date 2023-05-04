import React from 'react';
import { Link } from 'react-router-dom';

function Alarm_PEA_7(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/7/1"} className='button_div2'>
                            <h5>V3.0.0/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/7/2"} className='button_div2'>
                            <h5>V3.0.1 build191119/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/7/3"} className='button_div2'>
                            <h5>V3.0.1 build191230/ </h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Alarm_PEA_7;