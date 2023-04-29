import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function G0platform() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/G0 platform (2X47G3E 2X451G1-IDW12)/5.5.88 200317/"} className='button_div2'>
                             
                            <h5>5.5.88 200317/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/G0 platform (2X47G3E 2X451G1-IDW12)/5.5.88 206010/"} className='button_div2'>
                             
                            <h5>5.5.88 206010/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/G0 platform (2X47G3E 2X451G1-IDW12)/5.5.89 210429/"} className='button_div2'>
                             
                            <h5>5.5.89 210429/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default G0platform