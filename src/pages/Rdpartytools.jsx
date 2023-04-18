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
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Onvif Device Test Tool/</h5>
                        </Link>
                        <Link to={"/Software/3rd party tools/Visual C++/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Visual C++/ </h5>
                        </Link>
                        <Link to={"/Software/3rd party tools/Hik_DSFilters_Setup.rar"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik_DSFilters_Setup.rar</h5>
                        </Link>
                        <Link to={"/Software/3rd party tools/Hik_MFPlugins_Setup_EN.RAR"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik_MFPlugins_ <tr></tr> Setup_EN.RAR</h5>
                        </Link>
                        <Link to={'/Software/3rd party tools/NDP451-KB2858728-x86-x64-AllOS-ENU.exe'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>NDP451-KB2858728-x86-x64-AllOS-ENU.exe</h5>
                        </Link>
                        <Link to={'/Software/3rd party tools/WinMTR-v092.zip'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>WinMTR-v092.zip</h5>
                        </Link>
                        <Link to={'/Software/3rd party tools/WinPcap_4_1_3.exe'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>WinPcap_4_1_3.exe </h5>
                        </Link>
                        <Link to={'/Software/3rd party tools/directx_Jun2010_redist.exe'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>directx_Jun2010_redist.exe</h5>
                        </Link>
                        <Link to={'/Software/3rd party tools/tftp.zip'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>tftp.zip</h5>
                        </Link>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rdpartytools