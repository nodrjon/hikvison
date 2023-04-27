import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function LocalPlayback() {
    return (
        <div> 
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/Local Playback/3.0.0.5/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>3.0.0.5/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Local Playback/3.0.1.2/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>3.0.1.2/</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/03.%20Local%20Playback/Local%20Playback%20User%20Manual.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Local Playback User Manual.pdf</h5>
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

export default LocalPlayback