import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HowtoPage2() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/03%20Access%20Control/02%20How%20to/Hikvision%20MinMoe%20Temperature%20Screening%20Terminal_Calibration%20Guidance.pdf' className='button_div2'>
                             
                            <h5>Hikvision MinMoe Temperature Screening Terminal_Calibration Guidance.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/03%20Access%20Control/02%20How%20to/How%20to%20Configure%20Abnormal%20Temp%20Event%20Linkage%20Pop-up%20in%204200.pdf' className='button_div2'>
                             
                            <h5>How to Configure Abnormal Temp Event Linkage Pop-up in 4200.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/03%20Access%20Control/02%20How%20to/How%20to%20Configure%20Abnormal%20Temp%20Event%20Linkage%20Send%20Email%20in%204200.pdf' className='button_div2'>
                             
                            <h5>How to Configure Abnormal Temp Event Linkage Send Email in 4200.pdf</h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/04.%20Temperature%20Screening/03%20Access%20Control/02%20How%20to/How%20to%20use%20DS-KC001.docx"} className='button_div2'>
                             
                            <h5>How to use DS-KC001.docx</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/03%20Access%20Control/02%20How%20to/MinMoe%20Face%20Recognition%20Terminal%20Installation%20Guide_20200914.pdf' className='button_div2'>
                             
                            <h5>MinMoe Face Recognition Terminal Installation Guide_20200914.pdf</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default HowtoPage2