import React from 'react'
import { Link } from 'react-router-dom'

export default function NVRIPregs_E() {
  return (
    <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/NVR (IP regs)/e/1"} className='button_div2'>
                             
                            <h5>V3.4.103 build181226 Multi-lingual/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/NVR (IP regs)/e/2"} className='button_div2'>
                             
                            <h5>V3.4.106 build191009 Multi-lingual NEW!/ </h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
  )
}
