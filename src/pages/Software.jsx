import React from 'react'
import Navbar from '../components/Navbar';
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Software() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/iVMS-4200/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision Tools/</h5>
                        </Link>
                        <Link to={"/Software/3rd party tools/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>3rd party tools/</h5>
                        </Link>
                        <Link to={"/Software/Hik-Central/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik-Central/</h5>
                        </Link>
                        <Link to={'/Software/SDK/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SDK/ </h5>
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

export default Software