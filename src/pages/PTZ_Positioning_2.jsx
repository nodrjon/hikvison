import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_Positioning_2() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/Positioning System Firmware/2/1"} className='button_div2'>
                     
                    <h5>IPTM_5.5.0/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/Positioning System Firmware/2/2"} className='button_div2'>
                     
                    <h5>IPTM_5.6.0/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/Positioning System Firmware/2/3"} className='button_div2'>
                     
                    <h5>IPTM_5.6.11/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/Positioning System Firmware/2/4"} className='button_div2'>
                     
                    <h5>IPTM_5.6.14/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/Positioning System Firmware/2/5"} className='button_div2'>
                     
                    <h5>IPTM_5.6.18/ </h5>
                </Link>

            </div>
             
        </div>
    </div>
</div>
  )
}
