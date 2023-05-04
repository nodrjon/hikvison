import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_21() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/21/1"} className='button_div2'>
                             
                            <h5>V3.1.2_build200925/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/21/2"} className='button_div2'>
                             
                            <h5>V3.1.2_build201127/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/21/3"} className='button_div2'>
                             
                            <h5>V3.2.33_build210406/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/21/4"} className='button_div2'>
                             
                            <h5>V3.2.33_build210610/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/21/5"} className='button_div2'>
                             
                            <h5>V3.2.35_build220214/</h5>
                        </Link>   
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/21/6"} className='button_div2'>
                             
                            <h5>V3.2.35_build220610/</h5>
                        </Link>   
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/21/7"} className='button_div2'>
                             
                            <h5>V3.2.35_build220913/</h5>
                        </Link>   
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/21/8"} className='button_div2'>
                             
                            <h5>V3.2.3_build210303/</h5>
                        </Link>   
                        
                          
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_21                              