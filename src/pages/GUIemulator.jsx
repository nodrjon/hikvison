import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function GUIemulator() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'> 
                    <div className='button_div'>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/07.%20GUI%20emulator/HikGUI%203.4.0.rar' className='button_div2'>
                             
                            <h5>HikGUI 3.4.0.rar</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/07.%20GUI%20emulator/HikGUI%204.0.0_en%20Setup.rar' className='button_div2'>
                             
                            <h5>HikGUI 4.0.0_en Setup.rar</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default GUIemulator