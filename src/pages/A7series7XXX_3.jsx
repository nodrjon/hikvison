import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A7series7XXX_3() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/7 series - 7XXX/H3 platform (DS-2CD7XXX)/h8_1"} className='button_div2'>
                             
                            <h5>V5.7.71_220121/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/7 series - 7XXX/H7 platform (iDS-2CD7XXX)/h8_2"} className='button_div2'>
                             
                            <h5>V5.8.0_220824/  </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/7 series - 7XXX/H8 platform (iDS-2CD7XXX(C), iDS-2CD71XX(D))/h8_3"} className='button_div2'>
                             
                            <h5>V5.8.20_230328/  </h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default A7series7XXX_3