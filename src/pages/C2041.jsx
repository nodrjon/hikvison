import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function C2041() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/06.%20Lens%20selection/2.0.4.1/Lens%20Selection%20v2.0.4.1%20Release%20Notes.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Lens Selection v2.0.4.1 Release Notes.pdf</h5>
                        </a>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Lens Selection.zip </h5>
                        </Link>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default C2041