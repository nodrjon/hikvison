import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function ForMacosx() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Macosx/SADP/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01. SADP/ </h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Macosx/BatchConfig Tool/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>02. BatchConfig Tool/ </h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Macosx/VS Player/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>03. VS Player/ </h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Macosx/Storage and network calculator/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>04. Storage and network calculator/ </h5>
                        </Link>
                        <a href='http://ftp.hikvision.ru/02.%20Software/02.%20Hikvision%20Tools/02.%20For%20Macosx/WebVideoPlugin.zip' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>WebVideoPlugin.zip</h5>
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

export default ForMacosx