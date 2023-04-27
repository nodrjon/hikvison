import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function TemperatureScreening() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Thermal Camera/"} className='button_div2'>
                             
                            <h5>01 Thermal Camera/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/NVR/"} className='button_div2'>
                             
                            <h5>02 NVR/ </h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/"} className='button_div2'>
                             
                            <h5>03 Access Control/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/iVMS-4200/"} className='button_div2'>
                             
                            <h5>04 iVMS-4200/</h5>
                        </Link>
                        <Link to={'/Temperature Screening/HikCentral Professional/'} className='button_div2'>
                             
                            <h5>05 HikCentral Professional/</h5>
                        </Link>
                        <Link to={'/Temperature Screening/Smart Onboard Temp Screening Terminal/'} className='button_div2'>
                             
                            <h5>06 Smart Onboard Temp Screening Terminal/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default TemperatureScreening