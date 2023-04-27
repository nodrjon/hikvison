import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Drivers_Old() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/HIKVISION Card Driver/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HIKVISION Card Driver/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4200 Card Driver/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision 4200 Card Driver/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4300 Card Driver/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision 4300 Card Driver/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/driver_v2.3_x64_x86/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>driver_v2.3_x64_x86/</h5>
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

export default Drivers_Old