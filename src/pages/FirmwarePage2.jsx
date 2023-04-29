import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function FirmwarePage2() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/NVR/Firmware/DeepinMind NVR/"} className='button_div2'>
                             
                            <h5>DeepinMind NVR/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/NVR/Firmware/I Series NVR/"} className='button_div2'>
                             
                            <h5>I Series NVR/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default FirmwarePage2