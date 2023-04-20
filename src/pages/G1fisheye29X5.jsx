import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function G1fisheye29X5() {
    return (<div>
        <div className='home_div'>
            <div className='home_div2'>
                <div className='button_div'>
                    <a target='_blank' href='http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G1%20fisheye%20%2829X5%29/IPC%20V5.4.52%20G1%20%20Release%20Note--External.pdf' className='button_div2'>
                        <i id='clear_' className="material-icons">clear</i>
                        <h5>IPC V5.4.52 G1  Release Note--External.pdf </h5>
                    </a>
                    <Link to={"/Software/"} className='button_div2'>
                        <i id='clear_' className="material-icons">clear</i>
                        <h5>IPC_G1_EN_STD_ 5.4.51_190122.zip </h5>
                    </Link>
                    <Link to={"/Documents/"} className='button_div2'>
                        <i id='clear_' className="material-icons">clear</i>
                        <h5>IPC_G1_EN_STD_ 5.4.52_200416.zip </h5>
                    </Link>
                    <Link to={"/Temperature Screening/"} className='button_div2'>
                        <i id='clear_' className="material-icons">clear</i>
                        <h5>IPC_G1_EN_STD_ 5.4.5_170216.zip </h5>
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

export default G1fisheye29X5