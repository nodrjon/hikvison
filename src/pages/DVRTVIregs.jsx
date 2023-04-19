import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function DVRTVIregs() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TVI 1.0 SH(E) series/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TVI 3.0 F series/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/TVI 4.0 K series/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TVI 4.0 K series/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/TVI 5.0 iDS series/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TVI 5.0 iDS series/ </h5>
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

export default DVRTVIregs