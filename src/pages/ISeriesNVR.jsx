import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function ISeriesNVR() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>DZ_K51_ML_  <br /> STD_V4.40.010_ <br /> 200929.zip</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default ISeriesNVR