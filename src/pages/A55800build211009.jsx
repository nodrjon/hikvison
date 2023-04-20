import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"


function A55800build211009() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G3_EN_STD_ 5.5.800_211009.zip</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/G3 platform (2XX6G2 2X41G2 2XX7G2 2XX6G0)/DS-2CD2XX6G2,2XX7G2 Models/5.5.800 build 211009 safe version/model.txt"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>model.txt</h5>
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

export default A55800build211009