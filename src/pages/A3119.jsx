import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A3119() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/01.%20iVMS-4200%20full%20version/3.1.1.9/iVMS-4200%20V3.1.1.9%20Release%20notes.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 V3.1.1.9 Release notes.pdf</h5>
                        </a>
                        <Link to={'/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200(V3.1.1.9_E).exe</h5>
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

export default A3119