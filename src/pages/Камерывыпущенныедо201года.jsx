import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

 
function Камерывыпущенныедо201года() {
    return (   
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/TypeC%20platform%20-%20DS-2CD7XXX%20DS-2CD8XXX/%D0%9A%D0%B0%D0%BC%D0%B5%D1%80%D1%8B%2C%20%D0%B2%D1%8B%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BE%202012%20%D0%B3%D0%BE%D0%B4%D0%B0/Hikvision%20Baseline%20Firmware_IPC_TypeC%20series_En_V3.2%20120105%28Released%29.rar"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision Baseline Firmware_IPC_TypeC series_En..</h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/Old%20models/TypeC%20platform%20-%20DS-2CD7XXX%20DS-2CD8XXX/%D0%9A%D0%B0%D0%BC%D0%B5%D1%80%D1%8B%2C%20%D0%B2%D1%8B%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BE%202012%20%D0%B3%D0%BE%D0%B4%D0%B0/Hikvision%20Baseline%20Firmware_IPC_TypeC%20series_En_V4.0.1%20120508%28Released%29.rar"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision Baseline Firmware_IPC_TypeC series_En..</h5>
                        </a>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/Камеры, выпущенные до 2012 года/text"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>README.TXT</h5>
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

export default Камерывыпущенныедо201года;