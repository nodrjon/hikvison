import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function ForIPSpeaker() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'> 
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/For IP Speaker/I series NVR firmware/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>I series NVR firmware/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/For IP Speaker/Speaker firmware/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Speaker firmware/</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/For%20IP%20Speaker/Hikvision-IP-Speaker-User-Manual.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision-IP-Speaker-User-Manual.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/For%20IP%20Speaker/How%20to%20link%20the%20IP%20speaker%20with%20NVR%20I%20series.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>How to link the IP speaker with NVR I series.pdf </h5>
                        </a>
                        <Link to={"/Documents/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>03. Documents/ </h5>
                        </Link>
                        <Link to={"/Temperature Screening/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPSpeaker_Tool_ V1.4.1.exe</h5>
                        </Link>
                        <Link to={'/VMS/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>NAManager2(V3.3.1).zip</h5>
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

export default ForIPSpeaker