import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Driver_v23_x64_x86() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x64/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS4000Drv-2.3-x64/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x86/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS4000Drv-2.3-x86/</h5>
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

export default Driver_v23_x64_x86