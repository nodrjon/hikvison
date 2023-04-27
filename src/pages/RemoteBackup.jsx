import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function RemoteBackup() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'> 
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/Remote Backup/V3.0.0.301/"} className='button_div2'>
                             
                            <h5>V3.0.0.301/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Remote Backup/V3.0.1.2/"} className='button_div2'>
                             
                            <h5>V3.0.1.2/</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/04.%20Remote%20Backup/User%20Manual.pdf' className='button_div2'>
                             
                            <h5>User Manual.pdf </h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default RemoteBackup