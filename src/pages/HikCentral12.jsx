import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HikCentral12() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/5.%20VMS/01.%20HikCentral/02.%20Documentation/HikCentral%201.2/Compatibility%20List%20of%20Third%20Party%20Devices%20Accessed%20via%20Plug-in%20%28V1.5.1%29_20180105.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Compatibility List of Third Party Devices Accessed via Plug-in (V1.5.1)_20180105.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/5.%20VMS/01.%20HikCentral/02.%20Documentation/HikCentral%201.2/HikCentral%20V1.2_Compatibility%20List%20of%20HIKVISION%20Products_20180418.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HikCentral V1.2_Compatibility List of HIKVISION Products_20180418.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/5.%20VMS/01.%20HikCentral/02.%20Documentation/HikCentral%201.2/HikCentral%20V1.2_Compatibility%20List%20of%20Third%20Party%20Devices%20Connected%20via%20HIKVISION%20DVR%20or%20NVR_20180410.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HikCentral V1.2_Compatibility List of Third Party Devices Connected</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/5.%20VMS/01.%20HikCentral/02.%20Documentation/HikCentral%201.2/HikCentral%20V1.2_Software%20Requirements%20%26%20Hardware%20Performance_20180420.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HikCentral V1.2_Software Requirements & Hardware Performance_20180420.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/5.%20VMS/01.%20HikCentral/02.%20Documentation/HikCentral%201.2/HikCentral_AE%20SpecificationV1.2%200420.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HikCentral A&E SECURITY SYSTEM System Specification</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/5.%20VMS/01.%20HikCentral/02.%20Documentation/HikCentral%201.2/UD09789B_HikCentral%20Specification%20V1.2_20180420.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>UD09789B_HikCentral Specification V1.2_20180420.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/5.%20VMS/01.%20HikCentral/02.%20Documentation/HikCentral%201.2/What%27s%20New%20for%20HikCentral%20V1.2_20180420.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>What's New for HikCentral V1.2_20180420.pdf</h5>
                        </a>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HikCentral12