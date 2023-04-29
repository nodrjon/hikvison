import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function POS() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/POS/How%20to%20use%20POS%20function%20in%20DVR%20using%20TCP%20or%20UDP.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>How to use POS function in DVR using TCP or UDP.pdf </h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/POS/POS%20NVR%20System%20Structure.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>POS NVR System Structure.pdf</h5>
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

export default POS