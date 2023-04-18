import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Hikvision() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01. IP Camera/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/NVR (IP regs)/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>02. NVR (IP regs)/  </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/PTZ/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>03. PTZ/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>04. DVR (TVI regs)/ </h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>05. Video Intercom/  </h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Access Control/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>06. Access Control/ </h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Alarm/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>07. Alarm/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Keyboards/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>08. Keyboards/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Network/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>09. Network/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Thermal/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>10. Thermal/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Storage/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>11. Storage/</h5>
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

export default Hikvision