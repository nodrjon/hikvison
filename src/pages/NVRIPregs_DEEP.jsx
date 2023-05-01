import React from 'react'
import { Link } from 'react-router-dom'

export default function NVRIPregs_DEEP() {
  return (
    <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/NVR (IP regs)/deep/1"} className='button_div2'>
                             
                            <h5>01-1st generation/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/NVR (IP regs)/deep/2"} className='button_div2'>
                             
                            <h5>02-2nd generation/  </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/NVR (IP regs)/deep/3"} className='button_div2'>
                             
                            <h5>03-3rd generation/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/NVR (IP regs)/deep/4"} className='button_div2'>
                             
                            <h5>04-4th generation/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/NVR (IP regs)/deep/5"} className='button_div2'>
                             
                            <h5>05-iDS-76xxNXI-I2/ </h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
  )
}
