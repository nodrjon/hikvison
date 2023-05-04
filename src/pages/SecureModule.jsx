import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function SecureModule() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Secure Module/1"} className='button_div2'>
                            <h5>Baseline/</h5>
                        </Link>
                        
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default SecureModule