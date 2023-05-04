import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_28() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/28/1"} className='button_div2'>
                             
                            <h5>V1.0.1_build190724/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/28/2"} className='button_div2'>
                             
                            <h5>V1.0.1_build190918/  </h5>
                        </Link>
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_28                              