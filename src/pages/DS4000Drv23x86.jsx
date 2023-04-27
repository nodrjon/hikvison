import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function DS4000Drv23x86() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x86/DS4000Drv.inf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS4000Drv.inf</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x86/DS40xxDrv.sys' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS40xxDrv.sys</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x86/DS41xxDrv.sys' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS41xxDrv.sys </h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x86/DS41xxHDDrv.sys' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS41xxHDDrv.sys</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x86/DS42xxDrv.sys' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS42xxDrv.sys</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x86/Driver%20Install.exe' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Driver Install.exe </h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x86/hikdrv.cat' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>hikdrv.cat</h5>
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

export default DS4000Drv23x86