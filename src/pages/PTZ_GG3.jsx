import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_GG3() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/G3 - DS-2DFxxxx(S5)/1"} className='button_div2'>
                     
                    <h5>V5.5.800 safe version/</h5>
                </Link>
                <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/3.%20G3%20-%20DS-2DFxxxx%28S5%29/PTZ%20Camera%20V5.5.24%20Release%20Note%20--G3.pdf"} className='button_div2'>
                     
                    <h5>PTZ Camera V5.5.24 Release Note --G3.pdf</h5>
                </a>
                <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/3.%20G3%20-%20DS-2DFxxxx%28S5%29/PTZ%20Camera%20V5.5.25%20Release%20Note%20--G3.pdf"} className='button_div2'>
                     
                    <h5>PTZ Camera V5.5.25 Release Note --G3.pdf</h5>
                </a>
            </div>
             
        </div>
    </div>
</div>
  )
}
