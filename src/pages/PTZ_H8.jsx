import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_H8() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/1"} className='button_div2'>
                     
                    <h5>5.7.2/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/2"} className='button_div2'>
                     
                    <h5>5.7.3/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/2"} className='button_div2'>
                     
                    <h5>5.7.4/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/2"} className='button_div2'>
                     
                    <h5>5.7.4 SP3/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/2"} className='button_div2'>
                     
                    <h5>5.8.0/</h5>
                </Link>

            </div>
             
        </div>
    </div>
</div>
  )
}
