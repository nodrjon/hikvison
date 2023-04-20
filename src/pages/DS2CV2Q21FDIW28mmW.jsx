import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function DS2CV2Q21FDIW28mmW() {
    return (
        <div><div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DIPCTC_E6_EN_STD_ 5.5.800_210630.zip </h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>model.txt  </h5>
                        </Link>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default DS2CV2Q21FDIW28mmW