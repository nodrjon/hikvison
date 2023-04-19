import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function DSKC001() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/Access Control/Firmware/DS-KC001/V2.1.9_build200714 release note.txt"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>V2.1.9_build200714 release note.txt</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>VIS_INDOOR_R1_ EN_NEU_V2.1.9_ build200714.zip</h5>
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

export default DSKC001