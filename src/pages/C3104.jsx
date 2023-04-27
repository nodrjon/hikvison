import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function C3104() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/02.%20BatchConfig%20Tool/3.1.0.4/Batch%20Configuration%203.1.0.4%20Release%20Notes.pdf' className='button_div2'>
                             
                            <h5>Batch Configuration 3.1.0.4 Release Notes.pdf</h5>
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

export default C3104