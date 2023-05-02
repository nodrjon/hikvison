import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_Positioning() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/Positioning System Firmware/1"} className='button_div2'>
                     
                    <h5>01--R3 Positioning System Firmware/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/Positioning System Firmware/2"} className='button_div2'>
                     
                    <h5>02--R7 Positioning System Firmware/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/Positioning System Firmware/3"} className='button_div2'>
                     
                    <h5>03--H3 Positioning System Firmware/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/Positioning System Firmware/4"} className='button_div2'>
                     
                    <h5>05--H8 Positioning System Firmware/ </h5>
                </Link>

            </div>
             
        </div>
    </div>
</div>
  )
}
