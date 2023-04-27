import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A2013() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a href='http://ftp.hikvision.ru/02.%20Software/03.%203rd%20party%20tools/Visual%20C%2B%2B/2013/vcredist_x64.exe' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>vcredist_x64.exe</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/03.%203rd%20party%20tools/Visual%20C%2B%2B/2013/vcredist_x86.exe' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>vcredist_x86.exe</h5>
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

export default A2013