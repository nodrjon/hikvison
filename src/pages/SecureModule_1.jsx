import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function SecureModule_1() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/3.%20Secure%20Module/Baseline/DS-K2M060_Net.bin"} className='button_div2'>
                             
                            <h5>DS-K2M060_Net.bin</h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/3.%20Secure%20Module/Baseline/DS-K2M060_Serial.bin"} className='button_div2'>
                             
                            <h5>DS-K2M060_Serial.bin</h5>
                        </a>
                        
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default SecureModule_1