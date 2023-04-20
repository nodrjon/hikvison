import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function G1Mplatform() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPCM_G1_EN_STD_ 5.6.0_190507.zip</h5>
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

export default G1Mplatform