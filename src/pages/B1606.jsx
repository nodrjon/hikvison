import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function B1606() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>Multilingual Package(iVMS-4200_1.6.0.6_AC).exe</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/02.%20iVMS-4200%20AC/1.6.0.6/iVMS-4200%20AC%20Client%20Software_Release%20Notes_V1.6.0.pdf' className='button_div2'>
                             
                            <h5>iVMS-4200 AC Client Software_Release Notes_V1.6..</h5>
                        </a>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>iVMS-4200 AC(V1.6.0.6_E).exe</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default B1606