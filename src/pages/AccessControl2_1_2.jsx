import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function AccessControl2_1_2() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/2/1"} className='button_div2'>
                             
                            <h5>V2.0.2_171107/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/2/2"} className='button_div2'>
                             
                            <h5>V2.0.4_180517/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/2/3"} className='button_div2'>
                             
                            <h5>V2.0.4_180913/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/2/4"} className='button_div2'>
                             
                            <h5>V2.0.5_190301/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/2/5"} className='button_div2'>
                             
                            <h5>V2.0.9_211028/</h5>
                        </Link>
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default AccessControl2_1_2