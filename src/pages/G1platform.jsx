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
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G1%20platform%20%282XX5%202XX3%202XX7G1%29/IPC_G1_EN_STD_5.5.0_170725.zip"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.5.0_170725.zip</h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G1%20platform%20%282XX5%202XX3%202XX7G1%29/IPC_G1_EN_STD_5.6.0_190507.zip"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.6.0_190507.zip </h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G1%20platform%20%282XX5%202XX3%202XX7G1%29/IPC_G1_EN_STD_5.6.5_200316.zip"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.6.5_200316.zip</h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G1%20platform%20%282XX5%202XX3%202XX7G1%29/IPC_G1_EN_STD_5.6.6_210625.zip"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.6.6_210625.zip </h5>
                        </a>
                        <a href={'http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G1%20platform%20%282XX5%202XX3%202XX7G1%29/IPC_G1_EN_STD_5.6.6_210827.zip'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.6.6_210827.zip</h5>
                        </a>
                        <a href={'http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G1%20platform%20%282XX5%202XX3%202XX7G1%29/IPC_G1_EN_STD_5.6.820_220519.zip'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G1_EN_STD_ 5.6.820_220519.zip</h5>
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

export default G1platform