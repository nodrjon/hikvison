import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function B1804() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Multilingual Package(iVMS-4200_1.8.0.4_AC).exe </h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/02.%20iVMS-4200%20AC/1.8.0.4/iVMS-4200%20AC%20Client%20Software_Release%20Notes_V1.8.0_external_20220706.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 AC Client Software_Release Notes_V1.8..</h5>
                        </a>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 AC(V1.8.0.4_E).exe </h5>
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

export default B1804