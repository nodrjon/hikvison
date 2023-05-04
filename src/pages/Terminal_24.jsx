import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_24() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/24/1"} className='button_div2'>
                             
                            <h5>ACS_DS-K1T802X_STD_ALL_1.0.1_160303/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/24/2"} className='button_div2'>
                             
                            <h5>V2.0.2_build180517/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/24/3"} className='button_div2'>
                             
                            <h5>V2.0.3_build190306/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/24/4"} className='button_div2'>
                             
                            <h5>V2.0.3_build200709/</h5>
                        </Link>
                        
                         
                        
                          
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_24                              