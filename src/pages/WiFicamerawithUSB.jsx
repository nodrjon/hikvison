import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function WiFicamerawithUSB() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/WiFi camera with USB/DS-2CD2U21_2Q21/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-2CD2U21_2Q21/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/WiFi camera with USB/DS-2CV2Q21FD-IW2.8mmW safe version/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-2CV2Q21FD-IW2.8mmW safe version/ </h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-2CD2U32_STD_ 5.4.71_181129.zip </h5>
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

export default WiFicamerawithUSB