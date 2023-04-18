import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Datasheets() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/02.%20Datasheets/UD09691B_Baseline_Quick%2BStart%2BGuide%2Bof%2BNetwork%2BTraffic%2BCamera_V5.3.0_91xx_20180509.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>UD09691B_Baseline_ <tr></tr> Quick+Start+Guide+ <tr></tr> of+Network+..</h5>
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

export default Datasheets