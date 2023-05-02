import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HybridSAN1Firmware() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A81016S DS-A80624S DS-A720XXR/"} className='button_div2'>
                             
                            <h5>DS-A81016S DS-A80624S DS-A720XXR/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/DS-A82024D/"} className='button_div2'>
                             
                             <h5>DS-A82024D/</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HybridSAN1Firmware