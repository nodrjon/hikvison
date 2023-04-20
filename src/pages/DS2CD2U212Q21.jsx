import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function DS2CD2U212Q21() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS-2CD2U21_2Q21_STD_ 5.4.800_210820.zip </h5>
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

export default DS2CD2U212Q21