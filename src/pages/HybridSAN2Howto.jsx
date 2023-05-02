import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HybridSAN2Howto() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/Basic configuration/"} className='button_div2'>
                             
                            <h5>232-6 (based on 231-4MC）/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/Email alarm/"} className='button_div2'>
                             
                             <h5>Email alarm/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/Hybrid san back up application/"} className='button_div2'>
                             
                            <h5>Hybrid san back up application/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/Hybrid san stream direct storage application/"} className='button_div2'>
                             
                             <h5>Hybrid san stream direct storage application/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Storage/Hybrid SAN/2. How to/Ipsan application/"} className='button_div2'>
                             
                            <h5>Ipsan application/</h5>
                        </Link>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/11.%20Storage/1.%20Hybrid%20SAN/2.%20How%20to/Hikvision%20Enterprise%20Storage%20HDD%20Compatibility%20List%20201807.xlsx"} className='button_div2'>
                             
                             <h5>Hikvision Enterprise Storage HDD Compatibility List 201807.xlsx</h5>
                        </a>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/11.%20Storage/1.%20Hybrid%20SAN/2.%20How%20to/How%20%20to%20Recover%20CVR%20Password%20by%20PuTTY.pdf"} className='button_div2'>
                             
                             <h5>How to Recover CVR Password by PuTTY.pdf</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HybridSAN2Howto