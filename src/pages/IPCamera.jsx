import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function IPCamera() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/"} className='button_div2'>
                             
                            <h5>01. 2 series - 2XXX/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/3 series - 3XXX/"} className='button_div2'>
                             
                            <h5>02. 3 series - 3XXX/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/4 series - 4XXX/"} className='button_div2'>
                             
                            <h5>03. 4 series - 4XXX/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/5 series - 5XXX/"} className='button_div2'>
                             
                            <h5>04. 5 series - 5XXX/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/6 series - 6XXX/'} className='button_div2'>
                             
                            <h5>05. 6 series - 6XXX/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/7 series - 7XXX/'} className='button_div2'>
                             
                            <h5>06. 7 series - 7XXX/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/8 series - 8XXX/'} className='button_div2'>
                             
                            <h5>07. 8 series - 8XXX/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/Other/'} className='button_div2'>
                             
                            <h5>08. Other/</h5>
                        </Link>
                        <Link to={'http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/%21%21%20README%21%21%21%20How%20to%20choose%20firmware.xlsx'} className='button_div2'>
                             
                            <h5>!! README!!! How to choose firmware.xlsx </h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default IPCamera