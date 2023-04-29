import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Keyboards() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Keyboards/DS-1005KI/"} className='button_div2'>
                             
                            <h5>DS-1005KI/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Keyboards/DS-1100KI/"} className='button_div2'>
                             
                            <h5>DS-1100KI/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Keyboards/DS-1100KI(B)/"} className='button_div2'>
                             
                            <h5>DS-1100KI(B)/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Keyboards/DS-1200KI&1006KI/"} className='button_div2'>
                             
                            <h5>DS-1200KI&1006KI/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Keyboards/DS-1600KI/'} className='button_div2'>
                             
                            <h5>DS-1600KI/</h5>
                        </Link>
                        <Link to={'/'} className='button_div2'>
                             
                            <h5>01 Keyboard compatibility list.xlsx</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Keyboards