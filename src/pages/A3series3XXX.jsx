import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A3series3XXX() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/3 series - 3XXX/G1 platform (3XX5)/"} className='button_div2'>
                             
                            <h5>G1 platform (3XX5)/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/3 series - 3XXX/G3 platform (3XX6G2)/"} className='button_div2'>
                             
                            <h5>G3 platform (3XX6G2)/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/3 series - 3XXX/G5 platform (3xx6G2(C) 3xx7G2(C))/"} className='button_div2'>
                             
                            <h5>G5 platform (3xx6G2(C) 3xx7G2(C))/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/3 series - 3XXX/G5 platform (3xxG2P)/'} className='button_div2'>
                             
                            <h5>G5 platform (3xxG2P)/</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default A3series3XXX