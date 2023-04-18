import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
function HikvisionTools() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01. For Windows/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Macosx/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>02. For Macosx/</h5>
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

export default HikvisionTools