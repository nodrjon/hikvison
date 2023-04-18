import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function V322build210207() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.2_build210207/ARM/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>ARM/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.2_build210207/MCU/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>MCU/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.2_build210207/Thermal Module/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Thermal Module/</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/03%20Access%20Control/01%20Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.2_build210207/Not%20Compatible%20with%20DS-K5671-3XF%20and%20DS-K5604A-3XF.txt' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Not Compatible with DS-K5671-3XF and DS-K5604A-..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/03%20Access%20Control/01%20Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.2_build210207/Temperature%20Screening%20MinMoe%20Terminal%20Release%20Note_V3.2.2_build210207.pdf' className='button_div2'>
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

export default V322build210207