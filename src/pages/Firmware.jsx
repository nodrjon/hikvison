import React from 'react'
import Navbar from '../components/Navbar';
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Firmware() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/"} className='button_div2'>
                            
                            <h5>01. Hikvision/</h5>
                        </Link>
                        <Link to={"/Firmware/HiWatch Value/"} className='button_div2'>
                            <h5>02. HiWatch Value/</h5>
                        </Link>
                        <Link to={"/Firmware/HiWatch Pro/"} className='button_div2'>
                            <h5>03. HiWatch Pro/</h5>
                        </Link>
                        <Link to={"/Firmware/Hiwatch Ecoline/"} className='button_div2'>
                            <h5>03. Hiwatch Ecoline/</h5>
                        </Link>
                        <Link to={'/Firmware/HiWatch-CATC/'} className='button_div2'>
                            <h5>04. HiWatch-CATC/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/'} className='button_div2'>
                            <h5>05. Only for Warehouse/</h5>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Firmware