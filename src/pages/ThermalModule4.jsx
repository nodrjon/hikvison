import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function ThermalModule4() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V2.2.6_build201224/Thermal Module/Thermal Module Release Note_V5.5.4_build201107.txt"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Thermal Module Release Note_V5.5.4_ build201107.txt</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>digicap_thermo-en-gm_V5.5.4_build201107</h5>
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

export default ThermalModule4