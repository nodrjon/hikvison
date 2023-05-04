import React from 'react'
import { Link } from 'react-router-dom'

export default function Alarm_PEA() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/1"} className='button_div2'>

                            <h5>DS-PEA1-21/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/2"} className='button_div2'>

                            <h5>DS-PEA1-N1/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/3"} className='button_div2'>

                            <h5>DS-PEA2-21/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/4"} className='button_div2'>

                            <h5>DS-PEA3M-21/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/5'} className='button_div2'>

                            <h5>DS-PEA3M-21H/ </h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/6'} className='button_div2'>

                            <h5>DS-PEA4H-10/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/7"} className='button_div2'>

                            <h5>DS-PEA4L-10/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/8"} className='button_div2'>

                            <h5>DS-PEA4L-7/ </h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/9'} className='button_div2'>

                            <h5>DS-PEAP-CV/</h5>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
