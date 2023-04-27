import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Oldmodels() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R0 Fisheye(DS-2CD2942F-I(W)(S))/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>R0 Fisheye(DS-2CD2942F-I(W)(S))/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R0 platform (2xx2)/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>R0 platform (2xx2)/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R2 platform (2хх2 2mpx, 2xx0)/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>R2 platform (2хх2 2mpx, 2xx0)/  </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>R6 platform (2X22FWD, 2X42FWD)/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeA(6441)/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TypeA(6441)/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeB(6446)/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TypeB(6446)/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TypeC platform - DS-2CD7XXX DS-2CD8XXX/</h5>
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

export default Oldmodels