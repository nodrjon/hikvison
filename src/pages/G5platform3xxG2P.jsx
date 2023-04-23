import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function G5platform3xxG2P() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPCE_P_G5_EN_STD_ 5.7.10_220614.zip</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPCE_P_G5_EN_STD_ 5.7.10_221116.zip </h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/02.%203%20series%20-%203XXX/G5%20platform%20%283xx6G2%28C%29%203xx7G2%28C%29%29/Network%20Camera%20V5.5.111%20Release%20Note%20--G5.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Network Camera V5.5.111 Release Note --G5.pdf </h5>
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

export default G5platform3xxG2P