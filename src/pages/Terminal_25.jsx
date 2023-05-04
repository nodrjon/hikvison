import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
import SecureModule from './SecureModule'

function Terminal_25() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/25/1"} className='button_div2'>
                             
                            <h5>DS-K1T803_EN_GM_V1.0.0_20160910/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/25/2"} className='button_div2'>
                             
                            <h5>V1.1.3_build190311/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Terminal_25                              