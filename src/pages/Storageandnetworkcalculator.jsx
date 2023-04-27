import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Storageandnetworkcalculator() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/02.%20For%20Macosx/04.%20Storage%20and%20network%20calculator/Storage%20and%20Network%20Calculator.pkg.zip' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Storage and Network Calculator.pkg.zip</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/02.%20For%20Macosx/04.%20Storage%20and%20network%20calculator/UD12718B_Baseline_User%20Manual%20of%20Storage%20and%20Network%20Calculator%20Software_V1.0_20181205.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>UD12718B_Baseline _User Manual of Storage and Ne.</h5>
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

export default Storageandnetworkcalculator