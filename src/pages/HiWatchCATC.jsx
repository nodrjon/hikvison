import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HiWatchCATC() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/HiWatch-CATC/DS-I20X-L/"} className='button_div2'>
                             
                            <h5>DS-I20X-L/</h5>
                        </Link>
                        <Link to={"/Firmware/HiWatch-CATC/DS-I25XZ/"} className='button_div2'>
                             
                            <h5>DS-I25XZ/</h5>
                        </Link>
                        <Link to={"/Firmware/HiWatch-CATC/DS-I25XZ (C)/"} className='button_div2'>
                             
                            <h5>DS-I25XZ (C)/</h5>
                        </Link>
                        <Link to={"/Firmware/HiWatch-CATC/DS-I45X/"} className='button_div2'>
                             
                            <h5>DS-I45X/</h5>
                        </Link>
                        <Link to={'/Firmware/HiWatch-CATC/DS-I45XZ/'} className='button_div2'>
                             
                            <h5>DS-I45XZ/</h5>
                        </Link>
                        <Link to={'/Firmware/HiWatch-CATC/DS-I45XZ (C)/'} className='button_div2'>
                             
                            <h5>DS-I45XZ (C)/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default HiWatchCATC