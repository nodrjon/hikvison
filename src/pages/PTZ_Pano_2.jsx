import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_Pano_2() {
  return (
<div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/2/1"} className='button_div2'>
                     
                    <h5>5.3.16/  </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/2/2"} className='button_div2'>
                     
                    <h5>5.3.19/  </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
