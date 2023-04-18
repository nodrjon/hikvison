import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function FirmwarePage3() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T643-T/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-K1T643-T/ </h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T672-T/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-K1T672-T/ </h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-KC001/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-KC001/</h5>
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

export default FirmwarePage3