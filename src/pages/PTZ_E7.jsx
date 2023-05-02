import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_E7() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/1"} className='button_div2'>
                     
                    <h5>V5.7.0_210728 safe version/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/2"} className='button_div2'>
                     
                    <h5>V5.7.11/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/2"} className='button_div2'>
                     
                    <h5>V5.7.3/     </h5>
                </Link>

            </div>
             
        </div>
    </div>
</div>
  )
}
