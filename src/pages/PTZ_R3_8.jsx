import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_R3_8() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
              <Link to={'/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/8_1'} className='button_div2'>
              <h5>5.0.2_Old_2014.07.01/ </h5>
              </Link>
                <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/0.%20R3%20-%20DS-2DFXXXX/R3%20%28%D0%B2%D1%8B%D0%BF%D1%83%D1%81%D0%BA%20%D0%B4%D0%BE%2010.2013%29/V5.0.0_130518.rar"} className='button_div2'>
                    <h5>V5.0.0_130518.rar</h5>
                </a>
            </div>
             
        </div>
    </div>
</div>
  )
}
