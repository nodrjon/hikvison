import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Download3() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/VMS/Blazer/Blazer Express/Download/Blazer Express 1.4/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Blazer Express 1.4/</h5>
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

export default Download3