import React from 'react'
import { Link } from 'react-router-dom'

export default function DVRTVIregs_F() {
  return (
    <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/1"} className='button_div2'>
                             
                            <h5>72_73_81HQHI-FN__72_76HUHI-FN/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/2"} className='button_div2'>
                             
                            <h5>72_HGHI-FN__72_HGHI-F/    </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/DVR (TVI regs)/TVI 3.0 F series/3 "} className='button_div2'>
                             
                            <h5>73_81_80_90HUHI-FN/   </h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
  )
}
