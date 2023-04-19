import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function V3232build211029A() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>ACS_672_3XF_AI3_ EN_STD_V3.2.32_ build211029.zip</h5>
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

export default V3232build211029A