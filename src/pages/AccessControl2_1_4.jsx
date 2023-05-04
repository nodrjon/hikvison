import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function AccessControl2_1_4() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/4/1"} className='button_div2'>
                             
                            <h5>1.0/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/4/2"} className='button_div2'>
                             
                            <h5>2.0/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/4/3"} className='button_div2'>
                             
                            <h5>2.0.3 190228/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/4/4"} className='button_div2'>
                             
                            <h5>2.0.3 210129/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/4/5"} className='button_div2'>
                             
                            <h5>2.0.5/ </h5>
                        </Link>
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default AccessControl2_1_4