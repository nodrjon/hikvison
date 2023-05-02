import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function STIpsanapplication() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/11.%20Storage/1.%20Hybrid%20SAN/2.%20How%20to/Ipsan%20application/How%20to%20Add%20%20IP%20SAN%20to%20DVR%20or%20NVR.docx"} className='button_div2'>
                            <h5>How to Add IP SAN to DVR or NVR.docx</h5>
                        </a> 
                        <a href={"http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/11.%20Storage/1.%20Hybrid%20SAN/2.%20How%20to/Ipsan%20application/How%20to%20add%20IP%20SAN%20storage%20in%20windows%20storage%20server.docx"} className='button_div2'>
                            <h5>How to add IP SAN storage in windows storage server.docx</h5>
                        </a> 
                    </div>                     
                </div>
            </div>
        </div>
    )
}

export default STIpsanapplication