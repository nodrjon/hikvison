import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HiWatchValue() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/HiWatch Value/IP Cameras/"} className='button_div2'>
                             
                            <h5>01. IP Cameras/</h5>
                        </Link>
                        <Link to={"/Firmware/HiWatch Value/NVR (IP regs)/"} className='button_div2'>
                             
                            <h5>02. NVR (IP regs)/</h5>
                        </Link>
                        <Link to={"/Firmware/HiWatch Value/PTZ/"} className='button_div2'>
                             
                            <h5>03. PTZ/</h5>
                        </Link>
                        <Link to={"/Firmware/HiWatch Value/ DVR (TVI regs)/"} className='button_div2'>
                             
                            <h5>04. DVR (TVI regs)/</h5>
                        </Link>
                        <Link to={'/Firmware/HiWatch Value/Video Intercom/'} className='button_div2'>
                             
                            <h5>05. Video Intercom/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default HiWatchValue