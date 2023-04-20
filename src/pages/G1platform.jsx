import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function G1platform() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/05.%20SDK/Device%20Network%20SDK%20Programming%20Manual%28DVR%29.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Firmware V5.6.0 Release Note.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/05.%20SDK/Device%20Network%20SDK%20Programming%20Manual%28DVR%29.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Firmware V5.6.5 Release Note.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/05.%20SDK/Device%20Network%20SDK%20Programming%20Manual%28DVR%29.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Firmware V5.6.6 Release Note.pdf</h5>
                        </a>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.5.0_170725.zip</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.6.0_190507.zip </h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.6.5_200316.zip</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.6.6_210625.zip </h5>
                        </Link>
                        <Link to={'/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.6.6_210827.zip</h5>
                        </Link>
                        <Link to={'/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.6.820_220519.zip</h5>
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

export default G1platform