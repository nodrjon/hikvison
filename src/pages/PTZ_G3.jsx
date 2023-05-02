import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_G3() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/1"} className='button_div2'>
                     
                    <h5>V5.5.80x safe version/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/2"} className='button_div2'>
                     
                    <h5>V5.5.820/</h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
