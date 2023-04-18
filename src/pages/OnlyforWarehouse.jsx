import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function OnlyforWarehouse() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"//Firmware/Only for Warehouse/DS-2CD2123G0E-I(B)/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-2CD2123G0E-I(B)/</h5>
                        </Link>
                        <Link to={"/Firmware/Only for Warehouse/DS-I200(D)/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I200(D)/</h5>
                        </Link>
                        <Link to={"/Firmware/Only for Warehouse/DS-I205M(B)(C0)DS-I405M(B)(C0)/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I205M(B)(C0)    DS-I405M(B)(C0)/ </h5>
                        </Link>
                        <Link to={"/Firmware/Only for Warehouse/DS-I214(W)(B)/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I214(W)(B)/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/DS-I215(C)DS-I225(C)DS-I415/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I215(C)  DS-I225(C) DS-I415/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/DS-I250LDS-I253L/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I250L  DS-I253L/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/DS-I250W(B)I252W(B)/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I250W(B)  I252W(B)/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/DS-I250W(C)/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I250W(C)/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/DS-I259M(C)/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I259M(C)/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/DS-I400(B) DS-I402(B)/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I400(B) DS-I402(B)/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/DS-I400(C)DS-I402(C)DS-I403(C)/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I400(C)  DS-I402(C)  DS-I403(C)/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/DS-I450L DS-I453L/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I450L DS-I453L/ </h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/DS-I450M DS-I453M/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I450M DS-I453M/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/DS-I450M(B) DS-I453M(B) DS-I250M(B) DS-I253M(B)'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I450M(B) DS-I453M(B) DS-I250M(B) DS-I253M(B)/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/DS-I653M/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-I653M/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/IPC-T020(B)/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC-T020(B)/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/IPC-XXXX-G2/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC-XXXX-G2/</h5>
                        </Link>
                        <Link to={'/Firmware/Only for Warehouse/IPT-T012-G2_S    IPT-B012-G2_S/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPT-T012-G2_S    IPT-B012-G2_S/</h5>
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

export default OnlyforWarehouse