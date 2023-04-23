import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function IVMS4200mobile() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/06.%20iVMS-4200%20mobile/UD10128B_iVMS-4200%20Mobile%20Surveillance_User%20Manual_V1.0_20180606.PDF' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>UD10128B_iVMS-4200 Mobile Surveillance_User Man..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/06.%20iVMS-4200%20mobile/iVMS-4200%20Mobile%20%20Surveillance_Datasheet_V1.0_20180627.PDF' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 Mobile  Surveillance_ Datasheet_V1.0_2..</h5>
                        </a>
                        <Link to={'/VMS/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 Mobile Surveillance.exe</h5>
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

export default IVMS4200mobile