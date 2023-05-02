import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_Pano_4() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/4/1"} className='button_div2'>
                     
                    <h5>V5.5.27/   </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/4/2"} className='button_div2'>
                     
                    <h5>V5.5.41/   </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
