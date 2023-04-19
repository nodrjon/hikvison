import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function ARM5() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>ACS_671_3XF_ AI3_EN_STD_V3.2.2_ build210207.zip</h5>
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

export default ARM5