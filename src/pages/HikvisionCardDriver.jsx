import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HikvisionCardDriver() {
    return (
        <div>
            <div className='home_div'> 
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Driver_v2.5/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Driver_v2.5/ </h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Drivers_Old/</h5>
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

export default HikvisionCardDriver