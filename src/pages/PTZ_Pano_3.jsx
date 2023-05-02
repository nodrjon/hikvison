import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_Pano_3() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/3/1"} className='button_div2'>
                     
                    <h5>5.4.0 [V5.4.0 cannot upgrade to V5.4.32]/  </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/3/2"} className='button_div2'>
                     
                    <h5>5.4.32 [V5.4.32 cannot downgrade to V5.4.0]/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/3/3"} className='button_div2'>
                     
                    <h5>5.4.35/   </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
