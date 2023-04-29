import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Network() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Network/Network Switch/"} className='button_div2'>
                             
                            <h5>01. Network Switch/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Network/Wireless Bridge/"} className='button_div2'>
                             
                            <h5>Wireless Bridge/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Network