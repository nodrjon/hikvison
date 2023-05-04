import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_20() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/20/1"} className='button_div2'>
                             
                            <h5>V3.10.0_build230202/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/20/2"} className='button_div2'>
                             
                            <h5>V3.3.12_build220906/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/20/3"} className='button_div2'>
                             
                            <h5>V3.3.1_build220120/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/20/4"} className='button_div2'>
                             
                            <h5>V3.3.1_build220610/</h5>
                        </Link>
                         
                        
                          
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_20                              