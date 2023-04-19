import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A20200901() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Smart Onboard Temp Screening Terminal/Firmware/20200901/Thermal/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Thermal/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Smart Onboard Temp Screening Terminal/Firmware/20200901/two in one/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>two in one/</h5>
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

export default A20200901