import React from 'react'
import logo from "../photo/logo1.png"
import { Link, useNavigate } from "react-router-dom"

function Navbar() {

   const navigate = useNavigate()

    const comeBack = () => {
        navigate(-1)
    }

    return (
        <div onClick={comeBack} className='navbar_div'>
            <div className='navbar_div2'>
                <img src={logo} alt="" />
                <i id='back_icon' class="material-icons">clear</i>
            </div>
        </div>
    )
}

export default Navbar;