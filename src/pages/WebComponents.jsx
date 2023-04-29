import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"
 
function WebComponents() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>WebComponents 3.0.6.27.exe</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>WebComponents 3.0.6.46.exe</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>WebComponents 3.0.7.31.exe</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default WebComponents