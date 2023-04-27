import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function IseriesNVRfirmware() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'> 
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DZ_K51_ML_STD_V4. 50.000_220708.zip </h5>
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

export default IseriesNVRfirmware