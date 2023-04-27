import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function SADP() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'> 
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/SADP/Release Notes/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Release Notes/</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SADPTool_3.0.1.10.exe</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SADPTool_3.0.2.4.exe</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SADPTool_3.0.4.2.exe</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SADPTool_3.0.4.3.exe</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SADPTool_3.0.4.5.exe</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SADPTool_3.0.4.9.exe</h5>
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

export default SADP