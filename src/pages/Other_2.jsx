import React from 'react'
import { Link } from 'react-router-dom'

export default function Other_2() {
  return (
    <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/Other/pids_1"} className='button_div2'>
                             
                            <h5>Documents and How to/ </h5> 
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/Other/pids_2"} className='button_div2'>
                             
                            <h5>Firmware/</h5>
                        </Link>

                    </div>
                     
                </div>
            </div>
        </div>
  )
}
