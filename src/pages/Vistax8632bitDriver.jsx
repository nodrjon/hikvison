import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Vistax8632bitDriver() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/HIKVISION%20Card%20Driver/Vista%20x86%2832-bit%29%20Driver/DS40xxDrv.inf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS40xxDrv.inf</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/HIKVISION%20Card%20Driver/Vista%20x86%2832-bit%29%20Driver/DS40xxDrv.sys' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS40xxDrv.sys </h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/Hikvision%20Card%20Driver/Drivers_Old/HIKVISION%20Card%20Driver/Vista%20x86%2832-bit%29%20Driver/Driver%20Install.exe' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Driver Install.exe</h5>
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

export default Vistax8632bitDriver