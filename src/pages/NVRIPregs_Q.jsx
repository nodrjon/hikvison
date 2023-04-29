import React from 'react'
import { Link } from 'react-router-dom'

export default function NVRIPregs_Q() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/q_1"} className='button_div2'>
                     
                    <h5>71XX-Q/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/q_2"} className='button_div2'>
                     
                    <h5>71XX-Q(C)/ </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
