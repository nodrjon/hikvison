import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HandheldProducts() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Thermal Camera/Firmware/Firmware for Handheld Products/TP21B/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TP21B/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Thermal Camera/Firmware/Firmware for Handheld Products/TP31B/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TP31B/</h5>
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

export default HandheldProducts