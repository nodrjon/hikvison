import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Aseries4XXX() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/4 series - 4XXX/H0 platform (40X5）/"} className='button_div2'>
                             
                            <h5>H0 platform (40X5）/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/4 series - 4XXX/R1 platform (discontinued)/"} className='button_div2'>
                             
                            <h5>R1 platform (discontinued)/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/4 series - 4XXX/R3 platform (4x26FWD)/"} className='button_div2'>
                             
                            <h5>R3 platform (4x26FWD)/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/4 series - 4XXX/R4 platform (4XX5 series)/"} className='button_div2'>
                             
                            <h5>R4 platform (4XX5 series)/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/4 series - 4XXX/>R7 platform (H.265 4X26EFWD, 4BX6, 4CX6, 4DX6, ..'} className='button_div2'>
                             
                            <h5>R7 platform (H.265 4X26EFWD, 4BX6, 4CX6, 4DX6, ..</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Aseries4XXX