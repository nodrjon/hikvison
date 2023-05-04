import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_19() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/19/1"} className='button_div2'>
                             
                            <h5>V3.1.7_build200618/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/19/2"} className='button_div2'>
                             
                            <h5>V3.1.7_build200722/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/19/3"} className='button_div2'>
                             
                            <h5>V3.2.0_build210107/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/19/4"} className='button_div2'>
                             
                            <h5>V3.2.30_build210406/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/19/5"} className='button_div2'>
                             
                            <h5>V3.2.30_build210609/ </h5>
                        </Link>   
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/19/6"} className='button_div2'>
                             
                            <h5>V3.2.30_build220210/ </h5>
                        </Link>   
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/19/7"} className='button_div2'>
                             
                            <h5>V3.2.30_build220610/</h5>
                        </Link>   
                        
                          
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_19                              