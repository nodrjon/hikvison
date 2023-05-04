import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_26() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/26/1"} className='button_div2'>
                             
                            <h5>DS-K1T804 V1.1.0_170911/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/26/2"} className='button_div2'>
                             
                            <h5>V1.2.2_build190821/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/26/3"} className='button_div2'>
                             
                            <h5>V1.2.3_build191008/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/26/4"} className='button_div2'>
                             
                            <h5>V1.2.3_build191120/</h5>
                        </Link>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T804/How%20to%20Upgrade%20DS-K1T804%20serie%20Devices--including%20fingerprint%20module.pdf"} className='button_div2'>
                             
                            <h5>How to Upgrade DS-K1T804 serie Devices--including fingerprint module.pdf</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_26                              