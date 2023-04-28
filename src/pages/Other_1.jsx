import React from 'react'
import { Link } from 'react-router-dom'

export default function Other_1() {
  return (
    <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/Other/p_1"} className='button_div2'>
                             
                            <h5>4XXX/</h5> 
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/Other/p_2"} className='button_div2'>
                             
                            <h5>7XXX/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/Other/p_3"} className='button_div2'>
                             
                            <h5>7XXX iDS/ </h5> 
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/Other/p_4"} className='button_div2'>
                             
                            <h5>7XXX iDS (C)/ </h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
  )
}
