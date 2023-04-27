import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HIKVISIONCardDriver2() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/HIKVISION Card Driver/Vista x86(32-bit) Driver/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Vista x86(32-bit) Driver/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision Card Driver/Drivers_Old/HIKVISION Card Driver/win2000XP2003 Driver/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>win2000XP2003 Driver/</h5>
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

export default HIKVISIONCardDriver2;