import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_13() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/13/1"} className='button_div2'>
                             
                            <h5>SDK/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/13/2"} className='button_div2'>
                             
                            <h5>V1.0.0_build180425/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/13/3"} className='button_div2'>
                             
                            <h5>V1.1.1_build190423/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/13/4"} className='button_div2'>
                             
                            <h5>V1.1.1_build190724 Rus/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/13/5"} className='button_div2'>
                             
                            <h5>V1.1.2_build190812/</h5>
                        </Link>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T604/How%20to%20Upgrade%20Face%20Recognition%20Termianl.pdf"} className='button_div2'>
                             
                            <h5>How to Upgrade Face Recognition Termianl.pdf</h5>
                        </a>
                        
                        
                        
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_13                              