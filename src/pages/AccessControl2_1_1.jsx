import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function AccessControl2_1_1() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/1/1"} className='button_div2'>
                             
                            <h5>V1.0.0_build191202/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/1/2"} className='button_div2'>
                             
                            <h5>V1.0.1_build201215/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/1/3"} className='button_div2'>
                             
                            <h5>V1.0.4_build211028/</h5>
                        </Link>
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default AccessControl2_1_1