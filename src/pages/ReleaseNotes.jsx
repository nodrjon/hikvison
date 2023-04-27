import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function ReleaseNotes() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'> 
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/01.%20SADP/Release%20Notes/SADP%20V3.0.4.2%20Release%20Notes.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SADP V3.0.4.2 Release Notes.pdf </h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/01.%20SADP/Release%20Notes/SADP%20v3.0.2.4%20Release%20Notes.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SADP v3.0.2.4 Release Notes.pdf</h5>
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

export default ReleaseNotes