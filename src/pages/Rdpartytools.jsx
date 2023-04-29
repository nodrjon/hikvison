import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Rdpartytools() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'> 
                        <Link to={"/Software/3rd party tools/Onvif Device Test Tool/"} className='button_div2'>
                             
                            <h5>Onvif Device Test Tool/</h5>
                        </Link>
                        <Link to={"/Software/3rd party tools/Visual C++/"} className='button_div2'>
                             
                            <h5>Visual C++/ </h5>
                        </Link>
                        <a href='http://ftp.hikvision.ru/02.%20Software/03.%203rd%20party%20tools/Hik_DSFilters_Setup.rar' className='button_div2'>
                             
                            <h5>Hik_DSFilters_Setup.rar</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/03.%203rd%20party%20tools/Hik_MFPlugins_Setup_EN.RAR' className='button_div2'>
                             
                            <h5>Hik_MFPlugins_ <tr></tr> Setup_EN.RAR</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/03.%203rd%20party%20tools/NDP451-KB2858728-x86-x64-AllOS-ENU.exe' className='button_div2'>
                             
                            <h5>NDP451-KB2858728-x86-x64-AllOS-ENU.exe</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/03.%203rd%20party%20tools/WinMTR-v092.zip' className='button_div2'>
                             
                            <h5>WinMTR-v092.zip</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/03.%203rd%20party%20tools/WinPcap_4_1_3.exe' className='button_div2'>
                             
                            <h5>WinPcap_4_1_3.exe </h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/03.%203rd%20party%20tools/directx_Jun2010_redist.exe' className='button_div2'>
                             
                            <h5>directx_Jun2010_redist.exe</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/02.%20Software/03.%203rd%20party%20tools/tftp.zip' className='button_div2'>
                             
                            <h5>tftp.zip</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Rdpartytools