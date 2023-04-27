import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Mib() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/mib/Cameras/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Cameras/ </h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/mib/HIK-DEVICE-MIB.TXT' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HIK-DEVICE-MIB.TXT</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/mib/dvr.mib' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>dvr.mib</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/mib/nvr.mib' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>nvr.mib</h5>
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

export default Mib