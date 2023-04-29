import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function GUIemulator() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'> 
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>HikGUI 3.4.0.rar</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>HikGUI 4.0.0_en Setup.rar</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default GUIemulator