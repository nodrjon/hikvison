import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"


function ThermalCamera() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Thermal Camera/Installation&How to Video/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01 Installation&How to Video/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Thermal Camera/Quick Installation&Configuration Guide/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>02 Quick Installation&Configuration Guide/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Thermal Camera/Firmware/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>03 Firmware/</h5>
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

export default ThermalCamera