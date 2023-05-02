import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_Positioning_1() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/Positioning System Firmware/1/1"} className='button_div2'>
                     
                    <h5>IPTM_R3_5.4.0/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/Positioning System Firmware/1/2"} className='button_div2'>
                     
                    <h5>IPTM_R3_5.5.2/</h5>
                </Link>

            </div>
             
        </div>
    </div>
</div>
  )
}
