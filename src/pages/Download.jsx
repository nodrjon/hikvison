import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Download() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/VMS/HikCentral/Download/V1.6.0/"} className='button_div2'>
                             
                            <h5>V1.6.0/</h5>
                        </Link>
                        <a href={"http://ftp.hikvision.ru/5.%20VMS/01.%20HikCentral/01.%20Download/HikCentral_V1.2.1_20180719.exe"} className='button_div2'>
                             
                            <h5>HikCentral_ V1.2.1_ 20180719.exe </h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Download