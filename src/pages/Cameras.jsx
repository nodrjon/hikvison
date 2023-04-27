import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Cameras() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/mib/Cameras/snmp_mib_brow.exe' className='button_div2'>
                             
                            <h5>snmp_mib_brow.exe </h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/mib/Cameras/standard.mib' className='button_div2'>
                             
                            <h5>standard.mib</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/01.%20For%20Windows/mib/Cameras/%D0%9A%D0%B0%D0%BA%20%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D1%8C%20SNMP.pdf' className='button_div2'>
                             
                            <h5>Как настроить SNMP.pdf</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Cameras