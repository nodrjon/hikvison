import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_6() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/6/1"} className='button_div2'>
                             
                             <h5>V1.3.1_build200528/ </h5>
                         </Link>
                         <Link to={"/Firmware/Hikvision/Access Control/Terminal/6/2"} className='button_div2'>
                              
                             <h5>V1.3.32_build210407/ </h5>
                         </Link>
                         <Link to={"/Firmware/Hikvision/Access Control/Terminal/6/3"} className='button_div2'>
                              
                             <h5>V1.3.39_build210922/</h5>
                         </Link>
                         <Link to={"/Firmware/Hikvision/Access Control/Terminal/6/4"} className='button_div2'>
                              
                             <h5>V1.3.41_build220106/</h5>
                         </Link>
                        
                        
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_6                             