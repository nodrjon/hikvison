import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function DSK1T672T() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T672-T/V3.2.32_build210429/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>V3.2.32_build210429/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T672-T/V3.2.32_build211029/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>V3.2.32_build211029/</h5>
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

export default DSK1T672T