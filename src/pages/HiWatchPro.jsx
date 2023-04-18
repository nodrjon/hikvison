import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HiWatchPro() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/HiWatch Pro/IP Cameras/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01. IP Cameras/</h5>
                        </Link>
                        <Link to={"/Firmware/HiWatch Pro/NVR (IP regs)/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>02. NVR (IP regs)/</h5>
                        </Link>
                        <Link to={"/Firmware/HiWatch Pro/PTZ/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>03. PTZ/</h5>
                        </Link>
                        <Link to={"/Firmware/HiWatch Pro/DVR (TVI regs)/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>04. DVR (TVI regs)/</h5>
                        </Link>
                        <Link to={'/Firmware/HiWatch Pro/Video Intercom/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>05. Video Intercom/</h5>
                        </Link>
                        <Link to={'/Firmware/HiWatch Pro/Access control/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>06. Access control/</h5>
                        </Link>
                        <Link to={'/Firmware/HiWatch Pro/Thermal/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>07. Thermal/</h5>
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

export default HiWatchPro