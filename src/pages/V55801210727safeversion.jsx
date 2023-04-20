import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function V55801210727safeversion() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G5_EN_STD_5. 5.801_210727.zip</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G5%20platform%20%282xx3G2%202xx6G2%28C%29%202xx7G2%28C%29/V5.5.801_210727%20safe%20version/Network%20Camera%20V5.5.801%20Release%20Note%20--G5.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Network Camera V5.5.801 Release Note --G5.pdf </h5>
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

export default V55801210727safeversion