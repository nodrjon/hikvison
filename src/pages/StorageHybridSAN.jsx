import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function StorageHybridSAN() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Storage/Hybrid SAN/1. Firmware/"} className='button_div2'>
                             
                            <h5>1. Firmware/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/"} className='button_div2'>
                             
                             <h5>2. How to/</h5>
                         </Link>
 
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default StorageHybridSAN