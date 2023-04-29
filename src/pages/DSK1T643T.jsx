import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function DSK1T643T() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T643-T/V3.2.2_build210331/"} className='button_div2'>
                             
                            <h5>V3.2.2_build210331/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T643-T/V3.2.32_build211029/"} className='button_div2'>
                             
                            <h5>V3.2.32_build211029/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T643-T/V3.2.35_build220221/"} className='button_div2'>
                             
                            <h5>V3.2.35_build220221/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default DSK1T643T