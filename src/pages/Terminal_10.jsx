import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_10() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/10/1"} className='button_div2'>
                             
                            <h5>DZ20170912_041 DS-K1T500S for V3.3.0 HC3.3/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/10/2"} className='button_div2'>
                             
                            <h5>For 1.4.71 indoor station/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/10/3"} className='button_div2'>
                             
                            <h5>For 1.5.0 indoor station BETA/</h5>
                        </Link>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T500SF/ACS_13_hi3516c_EN_GM_V1.1.0_20170123.zip"} className='button_div2'>
                             
                            <h5>ACS_13_hi3516c_EN_GM_V1.1.0_20170123.zip </h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T500SF/DZ20170221_021__H2_EN_GM_V1.1.0_build170814.zip"} className='button_div2'>
                             
                            <h5>DZ20170221_021__H2_EN_GM_V1.1.0_build170814.zip</h5>
                        </a>
                        
                        
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_10                              