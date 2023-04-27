import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function SADP2() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/02.%20For%20Macosx/01.%20SADP/SADPTool.pkg.zip' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SADPTool.pkg.zip</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/02.%20For%20Macosx/01.%20SADP/UD12733B_SADP%20Software%20for%20Mac_User%20Manual_V1.0.0_20181203.PDF' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>UD12733B_SADP Software for Mac_User Manual_V1.0..</h5>
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

export default SADP2