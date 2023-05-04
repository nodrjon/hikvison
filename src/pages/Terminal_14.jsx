import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_14() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/14/1"} className='button_div2'>
                             
                            <h5>V1.2.0_build181114/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/14/2"} className='button_div2'>
                             
                            <h5>V1.2.0_build190313/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/14/3"} className='button_div2'>
                             
                            <h5>V1.2.0_build190724 Rus/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/14/4"} className='button_div2'>
                             
                            <h5>V1.2.1_build190918/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/14/5"} className='button_div2'>
                             
                            <h5>V1.2.1_build201010/</h5>
                        </Link>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/06.%20Access%20Control/4.%20Terminal/DS-K1T605/How%20to%20Upgrade%20Face%20Recognition%20Termianl.pdf"} className='button_div2'>
                             
                            <h5>How to Upgrade Face Recognition Termianl.pdf</h5>
                        </a>
                        
                        
                        
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_14                              