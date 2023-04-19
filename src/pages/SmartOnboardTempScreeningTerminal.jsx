import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function SmartOnboardTempScreeningTerminal() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Smart Onboard Temp Screening Terminal/Firmware/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Firmware/</h5>
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

export default SmartOnboardTempScreeningTerminal