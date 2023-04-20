import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function A55801build21105() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPC_G3_EN_STD_ 5.5.801_211105.zip</h5>
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

export default A55801build21105