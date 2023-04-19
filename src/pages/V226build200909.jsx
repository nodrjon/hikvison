import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function V226build200909() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200909/ARM/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>ARM/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200909/Thermal Module/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Thermal Module/</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/03%20Access%20Control/01%20Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200909/How%20to%20upgrade%20firmware%20in%20iVMS-4200.jpg' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>How to upgrade firmware in iVMS-4200.jpg </h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/03%20Access%20Control/01%20Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build200909/Temperature%20Screening%20MinMoe%20Terminal%20V2.2.6_build200909%20Release%20Note.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Temperature Screening MinMoe Terminal V2.2.6_build200909 Release Note.pdf</h5>
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

export default V226build200909