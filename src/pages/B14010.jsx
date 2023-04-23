import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function B14010() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Multilingual Package(iVMS-4200_1.4.0.10_AC).exe</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 AC(V1.4.0.10_E).exe</h5>
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

export default B14010