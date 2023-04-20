import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function R0Fisheye() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_R0_EN_STD_ 5.4.41_170309.zip</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_R0_EN_STD_ 5.4.5_170208.zip</h5>
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

export default R0Fisheye