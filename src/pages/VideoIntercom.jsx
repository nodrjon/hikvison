import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function VideoIntercom() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Video Intercom/Indoor station (KH)/"} className='button_div2'>
                             
                            <h5>001. Indoor station (KH)/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Video Intercom/Door station (KV KD KB)/"} className='button_div2'>
                             
                            <h5>002. Door station (KV KD KB)/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Video Intercom/Main Station (KM)/"} className='button_div2'>
                             
                            <h5>003. Main Station (KM)/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Video Intercom/First Gen intercom devices. OLD/"} className='button_div2'>
                             
                            <h5>008. First Gen intercom devices. OLD/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default VideoIntercom