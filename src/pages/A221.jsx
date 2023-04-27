import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A221() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a href='http://ftp.hikvision.ru/02.%20Software/04.%20Hik-Central/01.%20Software%20package/2.2.1/HikCentral%20Professional_Control_Client_V2.2.1.202204121132_Win_x64_Installer.exe' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HikCentral Professional_Control _Client_V2.2.1.2..</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/04.%20Hik-Central/01.%20Software%20package/2.2.1/HikCentral%20Professional_SAC_V2.2.1.202204121137_Win_x64_Installer.exe' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HikCentral Professional_SAC_V2. 2.1.202204121137..</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/04.%20Hik-Central/01.%20Software%20package/2.2.1/HikCentral%20Professional_V2.2.1.202204121137_Win_x64_Installer.exe' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HikCentral Professional_V2.2.1. 202204121137_Win..</h5>
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

export default A221