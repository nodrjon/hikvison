import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom" 

function SDK() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>Device Network SDK (for Windows 64-bit)_6.1.4.1..</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/05.%20SDK/Device%20Network%20SDK%20Programming%20Manual%28DVR%29.pdf' className='button_div2'>
                             
                            <h5>Device Network SDK Programming Manual(DVR).pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/05.%20SDK/Device%20Network%20SDK%20Programming%20Manual%28DVR%29.pdf' className='button_div2'>
                             
                            <h5>Device Network SDK Programming Manual(IPC).pdf</h5>
                        </a>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>EN-HCNetSDK(Windows32) <tr></tr> V6.0.0.10_ <tr></tr> build20181031.zip</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>EN-HCNetSDKV6.1.6.3_ <tr></tr> build20200925_ <tr></tr> Linux64.zip</h5>
                        </Link>
                        <Link to={'/'} className='button_div2'>
                             
                            <h5>EN-HCNetSDKV6.1.6.3_ <tr></tr> build20200925_Win32.zip</h5>
                        </Link>
                        <Link to={'/'} className='button_div2'>
                             
                            <h5>EN-HCNetSDKV6.1.6.3_ <tr></tr> build20200925_Win64.zip</h5>
                        </Link>
                        <Link to={'/'} className='button_div2'>
                             
                            <h5>EN-HCNetSDKV6.1.9.4_ <tr></tr> build20220412_win32.rar</h5>
                        </Link>
                        <Link to={'/'} className='button_div2'>
                             
                            <h5>EN-HCNetSDKV6.1.9.4_ <tr></tr> build20220412_win64.rar</h5>
                        </Link>
                        <Link to={'/'} className='button_div2'>
                             
                            <h5>EN_HCNetSDKV6.1.6.3_ <tr></tr> build20200925_ <tr></tr> Linux32.zip</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default SDK