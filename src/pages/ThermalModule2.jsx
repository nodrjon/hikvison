import React from 'react'
import { Link } from "react-router-dom"
import img from "../photo/img.png"

function ThermalModule2() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>digicap_thermo-en-gm_V5.5.4_build200807</h5>
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

export default ThermalModule2