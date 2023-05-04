import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_29() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/29/1"} className='button_div2'>
                             
                            <h5>RS485 to IO output Module/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/29/2"} className='button_div2'>
                             
                            <h5>RS485 to Wiegand Module/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/29/3"} className='button_div2'>
                             
                            <h5>V1.1.0_bulid181112/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/29/4"} className='button_div2'>
                             
                            <h5>V1.1.1_build190816 Rus/</h5>
                        </Link>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K5603-Z/1.upgrade%20MCU.png"} className='button_div2'>
                             
                            <h5>1.upgrade MCU.png</h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K5603-Z/2.upgrade%20ARM.png"} className='button_div2'>
                             
                            <h5>2.upgrade ARM.png</h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K5603-Z/Upgrade%20Instruction.txt"} className='button_div2'>
                             
                            <h5>Upgrade Instruction.txt </h5>
                        </a>
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_29                              