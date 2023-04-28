import React from 'react'
import { Link } from 'react-router-dom'

export default function Other_2_2_1() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/IP Camera/Other/pids_2_1_1"} className='button_div2'>
                     
                    <h5>4.2.5 191128/</h5> 
                </Link>
                <Link to={"/Firmware/Hikvision/IP Camera/Other/pids_2_1_2"} className='button_div2'>
                     
                    <h5>4.2.5 200924/  </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/IP Camera/Other/pids_2_1_3"} className='button_div2'>
                     
                    <h5>4.2.5_210324/ </h5>
                </Link>

            </div>
             
        </div>
    </div>
</div>
  )
}
