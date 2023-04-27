import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function AccessControl() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Access Control/Firmware/"} className='button_div2'>
                             
                            <h5>01 Firmware/</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/How to/"} className='button_div2'>
                             
                            <h5>02 How to/ </h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default AccessControl