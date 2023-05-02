import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_Pano() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/1"} className='button_div2'>
                     
                    <h5>For DS-2DP1636-D/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/2"} className='button_div2'>
                     
                    <h5>For DS-2DPXXXXZ-D/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/3"} className='button_div2'>
                     
                    <h5>For DS-2DPxxxZIX-D (second generation Panovu)/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/4"} className='button_div2'>
                     
                    <h5>For DS-2DPxxxxZIX-DE(T2)/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/PanoVu/5"} className='button_div2'>
                     
                    <h5>For DS-2PT3x2xIZ DS-2PT5x2xIZ/ </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
