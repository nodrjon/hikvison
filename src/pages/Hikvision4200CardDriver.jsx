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
                             
                            <h5>32bit WinOS/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4200 Card Driver/64bit WinOS/"} className='button_div2'>
                             
                            <h5>64bit WinOS/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Hikvision4200CardDriver