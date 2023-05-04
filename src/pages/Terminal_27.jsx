import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_27() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/27/1"} className='button_div2'>
                             
                            <h5>V1.3.0_build200321/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/27/2"} className='button_div2'>
                             
                            <h5>V1.3.0_build201020/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/27/3"} className='button_div2'>
                             
                            <h5>V1.3.30_build210407/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/27/4"} className='button_div2'>
                             
                            <h5>V1.3.43_build220212/</h5>
                        </Link>
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_27                              