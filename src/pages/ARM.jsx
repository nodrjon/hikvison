import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function ARM() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>ACS_671_3XF_ AI3_EN_GM_V2.2.6_ build200629.zip</h5>
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

export default ARM