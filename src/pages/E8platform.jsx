import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function E8platform() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/E8 platform (2CD2X23G0E(B))/5.5.800/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>5.5.800/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/E8 platform (2CD2X23G0E(B))/5.7.1/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>5.7.1/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/E8 platform (2CD2X23G0E(B))/5.7.12/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>5.7.12/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/E8 platform (2CD2X23G0E(B))/5.7.2/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>5.7.2/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/2 series - 2XXX/E8 platform (2CD2X23G0E(B))/5.7.20/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>5.7.20/</h5>
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

export default E8platform