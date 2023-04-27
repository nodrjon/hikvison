import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function ForWindows() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/Hikvision tools manager/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>00. Hikvision tools manager/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/SADP/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01. SADP/ </h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/BatchConfig Tool/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>02. BatchConfig Tool/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/Local Playback/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>03. Local Playback/</h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/Remote Backup/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>04. Remote Backup/</h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/VSPlayer/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>05. VSPlayer/</h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/Lens selection/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>06. Lens selection/</h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/GUI emulator/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>07. GUI emulator/</h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/WebComponents/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>08. WebComponents/ </h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/For IP Speaker/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>For IP Speaker/</h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/Hik IP Receiver pro/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik IP Receiver pro/</h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/Hik In - for webcams/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik In - for webcams/ </h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/Hikvision Card Driver/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision Card Driver/</h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/mib/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>mib/</h5>
                        </Link>
                        <Link to={'/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Storage and Network Calculator.zip</h5>
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

export default ForWindows