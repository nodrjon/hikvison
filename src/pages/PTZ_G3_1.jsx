import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_G3_1() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/1/1"} className='button_div2'>
                     
                    <h5>For v5.5.23 firmware / </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/1/2"} className='button_div2'>
                     
                    <h5>For v5.5.26 firmware/ </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
