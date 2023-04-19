import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Thermal2() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Thermal/Firmware/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1. Firmware/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Thermal/How to/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>2. How to/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Thermal/Soft/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>3. Soft/</h5>
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

export default Thermal2