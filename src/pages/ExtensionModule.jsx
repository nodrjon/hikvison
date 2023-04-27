import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function ExtensionModule() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>digicap_thermo-en-gm_V5.5.10_ build210406</h5>
                        </Link>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-K1T671TM-3XF_DS-K5604_DS-K5671_DS-K1TA70/V3.2.35_build220610/Extension Module/新建文本文档.txt"} className='button_div2'>
                             
                            <h5>新建文本文档.txt</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default ExtensionModule