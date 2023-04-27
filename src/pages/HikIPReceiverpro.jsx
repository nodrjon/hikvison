import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HikIPReceiverpro() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hik%20IP%20Receiver%20pro/Communication%20Matrix_1.4_Hik%20IP%20Receiver%20Pro.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Communication Matrix_1.4_Hik IP Receiver Pro.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hik%20IP%20Receiver%20pro/Hik%20IP%20Receiver%20One-Click%20Video%20Verification.mp4' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik IP Receiver One-Click Video Verification.mp4</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hik%20IP%20Receiver%20pro/Hik%20IP%20Receiver%20Pro%20Manitou.mp4' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik IP Receiver Pro Manitou.mp4</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hik%20IP%20Receiver%20pro/Hik%20IP%20Receiver%20Pro%20Operation%20Video.mp4' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik IP Receiver Pro Operation Video.mp4</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hik%20IP%20Receiver%20pro/Hik%20IP%20Receiver%20Pro%20V1.4%20Release%20Notes.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik IP Receiver Pro V1.4 Release Notes.pdf</h5>
                        </a>
                        <Link to={'/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik IP Receiver Pro (V1.6.0.202Buil d20221215).exe</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hik%20IP%20Receiver%20pro/Hik%20IP%20Receiver%20Pro_Datasheet_V1.4_20220119.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik IP Receiver Pro_Datasheet _V1.4_20220119.pdf</h5>
                        </a>
                        <Link to={'/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik IP Receiver Pro_V1.6.1. 4Build20230210.zip</h5>
                        </Link>
                        <Link to={'/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik VideoPlugin.exe</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hik%20IP%20Receiver%20pro/How%20to%20Set%20Up%20a%20Hot%20Spare%20Scenario%20Quick%20Start%20Guide.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>How to Set Up a Hot Spare Scenario Quick Start ..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hik%20IP%20Receiver%20pro/RU27087B_Hik%20Video%20Plugin__V1.4.3_en-US_20220512_20220617.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>RU27087B_Hik Video Plugin__V1.4.3_en-US_2022051..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hik%20IP%20Receiver%20pro/RU28166B_Hik%20IP%20Receiver%20Pro_User_V1.5.0%20_20220429_20220628.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>RU28166B_Hik IP Receiver Pro_User_V1.5.0 _20220..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hik%20IP%20Receiver%20pro/RU_FAQ%20for%20Hik%20IP%20Receiver%20Pro_20220616.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>RU_FAQ for Hik IP Receiver Pro_20220616.pdf</h5>
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

export default HikIPReceiverpro