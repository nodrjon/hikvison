import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A5588206010() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/G0%20platform%20%282X47G3E%202X4%2751G1-IDW1%272%29/5.5.88%20206010/IPC_G0_EN_STD_5.5.88_200610.zip"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G0_EN_STD_ 5.5.88_200610.zip </h5>
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

export default A5588206010