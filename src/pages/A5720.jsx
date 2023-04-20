import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A5720() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPCE_E8_EN_STD_ 5.7.20_221212.zip</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPCE_R_E8_EN_STD_ 5.7.20_221212.zip</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/E8%20platform%20%282CD2X23G0E%28B%29%29/5.7.20/Network%20Camera-V5.7.20%20Release%20Note-E8.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Network Camera-V5.7.20 Release Note-E8.pdf </h5>
                        </a>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default A5720