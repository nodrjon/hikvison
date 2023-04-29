import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function DobavleniepoRTSP() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%20RTSP/1.png    ' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.png</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%20RTSP/2.png' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>2.png </h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%20RTSP/3.png' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>3.png </h5>
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

export default DobavleniepoRTSP;