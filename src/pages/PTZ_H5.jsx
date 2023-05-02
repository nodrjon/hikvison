import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_H5() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/H5 - DS-2DFxxxxX(T2)/1"} className='button_div2'>
                     
                    <h5>V5.5.800 safe version/ </h5>
                </Link>
                <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/4.%20H5%20-%20DS-2DFxxxxX%28T2%29/PTZ%20Camera%20V5.5.27%20Release%20Note%20--H5.pdf"} className='button_div2'>
                     
                    <h5>PTZ Camera V5.5.27 Release Note --H5.pdf </h5>
                </a>
                <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/4.%20H5%20-%20DS-2DFxxxxX%28T2%29/PTZ%20Camera%20V5.5.40%20Release%20Note%20--H5.pdf"} className='button_div2'>
                     
                    <h5>PTZ Camera V5.5.40 Release Note --H5.pdf</h5>
                </a>
            </div>
             
        </div>
    </div>
</div>
  )
}
