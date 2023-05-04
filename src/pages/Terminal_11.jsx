import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_11() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/11/1"} className='button_div2'>
                             
                            <h5>For 1.4.71 indoor station/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/11/2"} className='button_div2'>
                             
                            <h5>For 1.5.0 indoor station BETA/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/11/3"} className='button_div2'>
                             
                            <h5>For Intercom 2.0/</h5>
                        </Link>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T501SF/ACS_00_H2_EN_GM_V1.1.2_build220212_baseline_no%20intercom.zip"} className='button_div2'>
                             
                            <h5>ACS_00_H2_EN_GM_V1.1.2_build220212_baseline_no intercom.zip</h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T501SF/ACS_04_H2_EN_GM_V1.1.0_build180202.zip"} className='button_div2'>
                             
                            <h5>ACS_04_H2_EN_GM_V1.1.0_build180202.zip</h5>
                        </a>
                        
                        
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_11                              