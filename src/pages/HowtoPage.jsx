import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HowtoPage() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                    <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/02%20NVR/02%20How%20to/AI%20People%20Flow%20Control%20Configuration%20Guide.pdf' className='button_div2'>
                             
                            <h5>AI People Flow Control Configuration Guide.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/02%20NVR/02%20How%20to/AI%20Temperature%20screening%20configuration%20guide.pdf' className='button_div2'>
                             
                            <h5>AI Temperature screening configuration guide.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/02%20NVR/02%20How%20to/AI%20temperature%20screening%20QSG.jpg.jpg' className='button_div2'>
                             
                            <h5>AI temperature screening QSG.jpg.jpg</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default HowtoPage