import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Thermal() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>IPTC_103_E7_ CN_STD_5.5.4_ 200713.zip</h5>
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

export default Thermal