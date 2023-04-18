import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function FirmwarePage() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Thermal Camera/Firmware/Firmware for 12XXB, 26XXB/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01 Firmware for 12XXB, 26XXB/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Thermal Camera/Firmware/Firmware for Handheld Products/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>02 Firmware for Handheld Products/</h5>
                        </Link>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirmwarePage