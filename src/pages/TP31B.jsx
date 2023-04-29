import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function TP31B() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a className='button_div2' href={'http://ftp.hikvision.ru/04.%20Temperature%20Screening/01%20Thermal%20Camera/03%20Firmware/02%20Firmware%20for%20Handheld%20Products/TP31B/IPTP_E2L_EN_STD_5.4.22_200325.zip'}>
                             
                            <h5>IPTP_E2L_EN_STD <tr></tr> _5.4.22_200325.zip</h5>
                        </a>
                        <a className='button_div2' href={'http://ftp.hikvision.ru/04.%20Temperature%20Screening/01%20Thermal%20Camera/03%20Firmware/02%20Firmware%20for%20Handheld%20Products/TP31B/IPTP_E2L_EN_STD_5.4.38_200922.zip'}>
                             
                            <h5>IPTP_E2L_EN_STD <tr></tr> _5.4.38_200922.zip</h5>
                        </a>
                        <Link to={"/Temperature Screening/Thermal Camera/Firmware/Firmware for Handheld Products/TP31B/Read me.txt"} className='button_div2'>
                             
                            <h5>Read me.txt</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/01%20Thermal%20Camera/03%20Firmware/02%20Firmware%20for%20Handheld%20Products/TP31B/V5.4.38%20build200922%20Release%20Notes.pdf' className='button_div2'>
                             
                            <h5>V5.4.38 build200922 Release Notes.pdf</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default TP31B