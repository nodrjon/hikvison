import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A1080Lite() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/1080Lite/1080.jpg' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1080.jpg </h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/1080Lite/1080lite.jpg' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1080lite.jpg</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/1080Lite/comp.jpg' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>comp.jpg</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/1080Lite/compzoom.jpg' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>compzoom.jpg</h5>
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

export default A1080Lite