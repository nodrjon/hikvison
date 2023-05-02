import React from 'react'
import { Link } from 'react-router-dom'

export default function DVRTVIregs_SH_2() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/2/1"} className='button_div2'>
                     
                    <h5>7204/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/2/2"} className='button_div2'>
                     
                    <h5>7208/    </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/DVR (TVI regs)/TVI 1.0 SH(E) series/2/3"} className='button_div2'>
                     
                    <h5>7216/</h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
