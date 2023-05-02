import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_Pano_5() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/5/1"} className='button_div2'>
                    <h5>5.5.800/</h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
