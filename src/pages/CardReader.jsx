import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function CardReader() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Card Reader/1"} className='button_div2'>
                             
                            <h5>DS-1107&1108/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Card Reader/2"} className='button_div2'>
                             
                            <h5>DS-K110X(01&02&03&04&06)/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Card Reader/3"} className='button_div2'>
                             
                            <h5>DS-K1201/</h5>
                        </Link>
                        
                        
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default CardReader