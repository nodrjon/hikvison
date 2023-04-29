import React from 'react'
import { Link } from 'react-router-dom'

export default function Other_1_p4() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/IP Camera/Other/ids(c)_1"} className='button_div2'>
                     
                    <h5>V5.7.80_220316/ </h5> 
                </Link>
                <Link to={"/Firmware/Hikvision/IP Camera/Other/ids(c)_2"} className='button_div2'>
                     
                    <h5>V5.7.80_220525/ </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/IP Camera/Other/ids(c)_3"} className='button_div2'>
                     
                    <h5>V5.8.10_230106/ </h5> 
                </Link>
                <Link to={"/Firmware/Hikvision/IP Camera/Other/ids(c)_4"} className='button_div2'>
                     
                    <h5>V5.8.10_230220/  </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/IP Camera/Other/ids(c)_5"} className='button_div2'>
                     
                    <h5>V5.8.20_230328/  </h5>
                </Link>
            </div>
             
        </div>
    </div>
</div>
  )
}
