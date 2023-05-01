import React from 'react'
import { Link } from 'react-router-dom'

export default function NVRIPregs_ACU_2() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/acu/2/1"} className='button_div2'>
                     
                    <h5>V4.40.400/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/acu/2/2"} className='button_div2'>
                     
                    <h5>V4.40.410/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/acu/2/3"} className='button_div2'>
                     
                    <h5>V4.40.415/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/acu/2/4"} className='button_div2'>
                     
                    <h5>V4.40.416/ </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
