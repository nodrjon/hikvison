import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function IVMS4200formacosx() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/iVMS-4200/iVMS-4200 for macosx/V2.0.0.10/"} className='button_div2'>
                             
                            <h5>V2.0.0.10/</h5>
                        </Link>
                        <Link to={"/Software/iVMS-4200/iVMS-4200 for macosx/V2.0.0.12/"} className='button_div2'>
                             
                            <h5>V2.0.0.12/</h5>
                        </Link>
                        <Link to={"/Software/iVMS-4200/iVMS-4200 for macosx/V2.0.0.9/"} className='button_div2'>
                             
                            <h5>V2.0.0.9/</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/04.%20iVMS-4200%20for%20macosx/User%20Manual%20of%20iVMS-4200%20for%20Mac_V2.0.PDF' className='button_div2'>
                             
                            <h5>User Manual of iVMS-4200 for Mac_V2.0.PDF</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default IVMS4200formacosx