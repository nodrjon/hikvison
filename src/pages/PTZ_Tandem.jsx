import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_Tandem() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/TandemVu/1"} className='button_div2'>
                     
                    <h5>G3G3（DS-2SE7C1XX（S5))/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/TandemVu/2"} className='button_div2'>
                     
                    <h5>G5H8(DS-2SE4Cxxxx)/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/TandemVu/3"} className='button_div2'>
                     
                    <h5>G5H8(DS-2SE7CXXX（P3）)/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/TandemVu/4"} className='button_div2'>
                     
                    <h5>G5H8(DS-2SF8CXXX(P3))/</h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/TandemVu/5"} className='button_div2'>
                     
                    <h5>G7H8(DS-2SF8CXXXMXG(F0))/ </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
