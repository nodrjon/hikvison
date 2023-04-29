import React from 'react'
import { Link } from 'react-router-dom'

export default function Other_2_2() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/IP Camera/Other/pids_2_1"} className='button_div2'>
                     
                    <h5>TCM203/ </h5> 
                </Link>
                <Link to={"/Firmware/Hikvision/IP Camera/Other/pids_2_2"} className='button_div2'>
                     
                    <h5>TCM203(B)/  </h5>
                </Link>

            </div>
             
        </div>
    </div>
</div>
  )
}
