import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function V3232build220114() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>ACS_671_3XF_ AI3_EN_STD_V3.2.35_ build220114.zip</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/03%20Access%20Control/01%20Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.32_build220114/Temperature%20Screening%20MinMoe%20Terminal%20Release%20Note_V3.2.35_build220114.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Temperature Screening MinMoe Terminal Release N..</h5>
                        </a>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default V3232build220114