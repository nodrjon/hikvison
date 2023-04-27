import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Hikvision4200CardDriver() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4200 Card Driver/32bit WinOS/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>32bit WinOS/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4200 Card Driver/64bit WinOS/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>64bit WinOS/</h5>
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

export default Hikvision4200CardDriver