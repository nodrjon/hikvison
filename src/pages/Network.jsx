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
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01. Network Switch/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Network/Wireless Bridge/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Wireless Bridge/</h5>
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

export default Network