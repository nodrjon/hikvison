import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function NVR() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/NVR/Firmware/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01 Firmware/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/NVR/How to/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>02 How to/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/NVR/Video/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>03 Video/</h5>
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

export default NVR