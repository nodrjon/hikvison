import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function DS4000Drv23x64() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x64/DS4000.inf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS4000.inf </h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x64/DS40xxV.sys' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS40xxV.sys</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x64/DS41xxHDDrv.sys' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS41xxHDDrv.sys</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x64/DS41xxV.sys' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS41xxV.sys</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x64/DS42xxV.sys' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS42xxV.sys</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x64/Driver%20Install.exe' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Driver Install.exe</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x64/WdfCoInstaller01005.dll' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>WdfCoInstaller01005.dll</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/driver_v2.3_x64_x86/DS4000Drv-2.3-x64/hikdrv.cat' className='button_div2'>
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

export default DS4000Drv23x64