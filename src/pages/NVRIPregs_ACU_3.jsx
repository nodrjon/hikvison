import React from 'react'
import { Link } from 'react-router-dom'

export default function NVRIPregs_ACU_3() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/acu/3/1"} className='button_div2'>
                     
                    <h5>76/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/acu/3/2"} className='button_div2'>
                     
                    <h5>77/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/NVR (IP regs)/acu/3/3"} className='button_div2'>
                     
                    <h5>Notice.txt </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
