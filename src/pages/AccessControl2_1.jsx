import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function AccessControl2_1() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/1"} className='button_div2'>
                             
                            <h5>DS-K260XT&-G/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/2"} className='button_div2'>
                             
                            <h5>DS-K26XX/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/3"} className='button_div2'>
                             
                            <h5>DS-K27XX/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/4"} className='button_div2'>
                             
                            <h5>DS-K28XX/</h5>
                        </Link>
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default AccessControl2_1