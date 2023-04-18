import React from 'react'
import logo from "../photo/logo1.png"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className='navbar_div'>
            <div className='navbar_div2'>
                <img src={logo} alt="" />
                <Link to={"/."} ><i class="material-icons">clear</i></Link>
            </div>
        </div>
    )
}

export default Navbar;