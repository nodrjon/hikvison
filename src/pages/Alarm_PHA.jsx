import React from 'react';
import { Link } from 'react-router-dom';

function Alarm_PHA(props) {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/1"} className='button_div2'>
                            <h5>1.0.2 build220719/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/2"} className='button_div2'>

                            <h5>1.0.3 build221102/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/3"} className='button_div2'>
                            <h5>1.0.3 build230107/ </h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Alarm_PHA;