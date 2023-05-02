import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_H7() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/H7 - DS-2DFxxxxX(T3),DS-2DYxxxx(T3)/1"} className='button_div2'>
                     
                    <h5>V5.5.800 build 210628 safe version/  </h5>
                </Link>
                <Link to={"/Firmware/Hikvision/PTZ/H7 - DS-2DFxxxxX(T3),DS-2DYxxxx(T3)/2"} className='button_div2'>
                     
                    <h5>V5.5.810 build 211009 safe version/ </h5>
                </Link>
                <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/6.%20H7%20-%20DS-2DFxxxxX%28T3%29%2CDS-2DYxxxx%28T3%29/PTZ%20Camera%20V5.5.40%20Release%20Note%20--H7.pdf"} className='button_div2'>
                     
                    <h5>PTZ Camera V5.5.40 Release Note --H7.pdf</h5>
                </a>

            </div>
             
        </div>
    </div>
</div>
  )
}
