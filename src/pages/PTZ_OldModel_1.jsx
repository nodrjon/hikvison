import React from 'react'
import { Link } from 'react-router-dom'

export default function PTZ_OldModel_1() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/Firmware/Hikvision/PTZ/Old models/1/1"} className='button_div2'>
                     
                    <h5>V5.4.800 safe version</h5>
                </Link>
                <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/Old%20models/R0/DS-2DE%20series%20PTZ%20firmware%205.1.0%20Release%20Note.pdf"} className='button_div2'>
                     
                    <h5>DS-2DE series PTZ firmware 5.1.0 Release Note.pdf </h5>
                </a>
                <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/Old%20models/R0/SPD%20V5.3.0%20Release%20Version%20Release%20Note.docx"} className='button_div2'>
                     
                    <h5>SPD V5.3.0 Release Version Release Note.docx </h5>
                </a>
                <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/Old%20models/R0/SPD%20V5.3.8%20Release%20Version%20Release%20Note.docx"} className='button_div2'>
                     
                    <h5>SPD V5.3.8 Release Version Release Note.docx</h5>
                </a>
            </div>
             
        </div>
    </div>
</div>
  )
}
