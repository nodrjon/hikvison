import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function IVMS4200VideoWallclient() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS_4200_Video_ Wall_2_6_3_2.rar</h5>
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

export default IVMS4200VideoWallclient