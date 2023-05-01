import React from 'react'
import { Link } from 'react-router-dom'

export default function NVRIPregs_ACU() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/acu/1"} className='button_div2'>
                     
                    <h5>K51_A8/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/acu/2"} className='button_div2'>
                     
                    <h5>K51_H92/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/acu/3"} className='button_div2'>
                     
                    <h5>K52_MA/ </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
