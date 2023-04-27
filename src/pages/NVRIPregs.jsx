import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function NVRIPregs() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/"} className='button_div2'>
                             
                            <h5>00. K series/</h5>
                        </Link>
                        <Link to={"/Software/"} className='button_div2'>
                             
                            <h5>01. M series/</h5>
                        </Link>
                        <Link to={"/Documents/"} className='button_div2'>
                             
                            <h5>02. I series/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/"} className='button_div2'>
                             
                            <h5>03. Q series/</h5>
                        </Link>
                        <Link to={'/VMS/'} className='button_div2'>
                             
                            <h5>04. E series/</h5>
                        </Link>
                        <Link to={'/VMS/'} className='button_div2'>
                             
                            <h5>05. AcuSence/ </h5>
                        </Link>
                        <Link to={'/VMS/'} className='button_div2'>
                             
                            <h5>06. DeepinMind/</h5>
                        </Link>
                        <Link to={'/VMS/'} className='button_div2'>
                             
                            <h5>07. I series super NVR 128 256 channels/</h5>
                        </Link>
                        <Link to={'/VMS/'} className='button_div2'>
                             
                            <h5>08. Old models/</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/02.%20NVR%20%28IP%20regs%29/%21%20%D0%9F%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0%20%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B0.pdf' className='button_div2'>
                             
                            <h5>! Прошивка регистратора.pdf</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default NVRIPregs