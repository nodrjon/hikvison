import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Hikvision4300CardDriver() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4300 Card Driver/DS43xxDrv-X64/"} className='button_div2'>
                             
                            <h5>DS43xxDrv-X64/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/Hikvision 4300 Card Driver/DS43xxDrv-X86/"} className='button_div2'>
                             
                            <h5>DS43xxDrv-X86/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Hikvision4300CardDriver