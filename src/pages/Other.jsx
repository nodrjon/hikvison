import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Other() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/"} className='button_div2'>
                             
                            <h5>P series/</h5> 
                        </Link>
                        <Link to={"/Software/"} className='button_div2'>
                             
                            <h5>iDS-TCM/ </h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/08.%20Other/H7-7xxx%20ANPR%20Installation%20%26%20Configuration%20Guidance.pdf' className='button_div2'>
                             
                            <h5>H7-7xxx ANPR Installation & Configuration Guida..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/08.%20Other/H8%20ANPR%20Camera%20Installation%20%20Configuration%20Guidance.pdf' className='button_div2'>
                             
                            <h5>H8 ANPR Camera Installation  Configuration Guid..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/08.%20Other/LPR%20Camera%20%20Instruction.pdf' className='button_div2'>
                             
                            <h5>LPR Camera  Instruction.pdf</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Other