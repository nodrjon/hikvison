import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_22() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/22/1"} className='button_div2'>
                             
                            <h5>V1.2.3_build191008/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/22/2"} className='button_div2'>
                             
                            <h5>V1.3.0_build200321/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/22/3"} className='button_div2'>
                             
                            <h5>V1.4.0_build220523/</h5>
                        </Link>
                        
                         
                        
                          
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_22                              