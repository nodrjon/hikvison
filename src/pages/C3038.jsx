import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function C3038() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/02.%20BatchConfig%20Tool/3.0.3.8/Batch%20Configuration%20Tool%20v3.0.3.8%20Release%20Notes.pdf' className='button_div2'>
                             
                            <h5>Batch Configuration Tool v3.0.3.8 Release Notes..</h5>
                        </a>
                        <Link to={'/'} className='button_div2'>
                             
                            <h5>Batch Configuration.exe</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div> 
    )
}

export default C3038