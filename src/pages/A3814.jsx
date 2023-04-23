import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A3814() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={'/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Multilingual Package(iVMS-4200_3.8.1.4).exe </h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/01.%20iVMS-4200%20full%20version/3.8.1.4/iVMS-4200%20Client%20Software_Release%20Notes_V3.8.1_20220929.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 Client Software_Release Notes_V3.8.1_..</h5>
                        </a>
                        <Link to={'/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200(V3.8.1.4_E).exe </h5>
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

export default A3814