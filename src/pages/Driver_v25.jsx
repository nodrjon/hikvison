import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Driver_v25() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Driver_v2.5/DS4000Drv-2.5-x64/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS4000Drv-2.5-x64/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Driver_v2.5/DS4000Drv-2.5-x86/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS4000Drv-2.5-x86/</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Driver_v2.5/Hikvision%20Card%20Windows%20Driver%20install%20Notes%20and%20FAQs.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision Card Windows Driver install Notes and..</h5>
                        </a>
                        <a target='_blank' href='' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>setup.exe</h5>
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

export default Driver_v25