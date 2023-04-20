import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function R6platform() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/Firmware_IPC_Raptor series_En_V5.5.0 170725/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Firmware_IPC_Raptor series_En_V5.5.0 170725/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/Firmware_IPC_Raptor series_En_V5.5.5 180111/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Firmware_IPC_Raptor series_En_V5.5.5 180111/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/Firmware_IPC_Raptor series_En_V5.5.53 180730/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Firmware_IPC_Raptor series_En_V5.5.53 180730/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/Firmware_IPC_Raptor series_En_V5.5.82 190220/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Firmware_IPC_Raptor series_En_V5.5.82 190220/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/R6 platform (2X22FWD, 2X42FWD)/Firmware_IPC_Raptor series_En_V5.5.82 190909/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Firmware_IPC_Raptor series_En_V5.5.82 190909/</h5>
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

export default R6platform