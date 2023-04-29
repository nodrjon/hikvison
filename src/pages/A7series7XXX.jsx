import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A7series7XXX() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/7 series - 7XXX/H3 platform (DS-2CD7XXX)/"} className='button_div2'>
                             
                            <h5>H3 platform (DS-2CD7XXX)/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/7 series - 7XXX/H7 platform (iDS-2CD7XXX)/"} className='button_div2'>
                             
                            <h5>H7 platform (iDS-2CD7XXX)/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/7 series - 7XXX/H8 platform (iDS-2CD7XXX(C), iDS-2CD71XX(D))/"} className='button_div2'>
                             
                            <h5>H8 platform (iDS-2CD7XXX(C), iDS-2CD71XX(D))/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default A7series7XXX