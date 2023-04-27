import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A6series6XXX() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/6 series - 6XXX/H3 platform (DS-2CD6DX4_6924)/"} className='button_div2'>
                             
                            <h5>H3 platform (DS-2CD6DX4_6924)/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/6 series - 6XXX/H3+M platform (6425G0F63X5)/"} className='button_div2'>
                             
                            <h5>H3+M platform (6425G0'F,63X5)/  </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/6 series - 6XXX/H7 platform (DS-2CD'XM6825,DS-2CD6DX2,DS-2XE68X5)/"} className='button_div2'>
                             
                            <h5>H7 platform (DS-2CD'XM6825,DS-2CD6DX2,DS-2XE68X5)/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/6 series - 6XXX/R4 DS-2CD6986F/"} className='button_div2'>
                             
                            <h5>R4 DS-2CD6986F/  </h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/6 series - 6XXX/R4 Fisheye (DS-2CD63X2)/'} className='button_div2'>
                             
                            <h5>R4 Fisheye (DS-2CD63X2)/ </h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default A6series6XXX