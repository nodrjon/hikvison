import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function V55800210628safeversion() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        {/* <Link to={"/"} className='button_div2'> */}
                        <a href="http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/01.%20IP%20Camera/01.%202%20series%20-%202XXX/E3%20platform%20%282X23G0D-IW2%202X21G1-IDW1%272%202X21G0%202X27G3E%29/V5.5.800%20210628%20safe%20version/IPC_E3_EN_STD_5.5.800_210628.zip" className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_E3_EN_STD_ 5.5.800_210628.zip</h5>
                        </a>
                        {/* </Link> */}
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/E3 platform (2X23G0D-IW2 2X21G1-IDW12 2X21G0 2/V5.5.800 210628 safe version/Readme.txt"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Readme.txt</h5>
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

export default V55800210628safeversion