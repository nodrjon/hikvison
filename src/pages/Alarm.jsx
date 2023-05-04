import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Alarm() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PEA Emergency Alarm/"} className='button_div2'>                            
                            <h5>DS-PEA Emergency Alarm/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Pro Security Control Panel/"} className='button_div2'>                        
                            <h5>DS-PHA Hybrid Pro Security Control Panel/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PHA Hybrid Security Control Panel/"} className='button_div2'> 
                            <h5>DS-PHA Hybrid Security Control Panel/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Alarm/DS-PR Security Rader/"} className='button_div2'>                            
                            <h5>DS-PR Security Rader/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Alarm/DS-PWA32 Wireless Hub/'} className='button_div2'>                             
                            <h5>DS-PWA32 Wireless Hub/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Alarm/DS-PWA48-64-96 AX PRO Wireless Control Panel/'} className='button_div2'>                            
                            <h5>DS-PWA48-64-96 AX PRO Wireless Control Panel/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Alarm