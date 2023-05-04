import React from 'react'
import { Link } from 'react-router-dom'

export default function DVRTVIregs_K() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/DVR (TVI regs)/1"} className='button_div2'>
                     
                    <h5>4.20.001 190430/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/DVR (TVI regs)/2"} className='button_div2'>
                     
                    <h5>4.20.002 210705/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/DVR (TVI regs)/3"} className='button_div2'>
                     
                    <h5>4.21.100 200307/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/DVR (TVI regs)/4"} className='button_div2'>
                     
                    <h5>4.21.110 200610/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/DVR (TVI regs)/5"} className='button_div2'>
                     
                    <h5>4.25.000 200925/  </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/DVR (TVI regs)/6"} className='button_div2'>
                     
                    <h5>4.25.001 201107/</h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
