import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Blazer() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/VMS/Blazer/Blazer Pro/"} className='button_div2'>
                             
                            <h5>Blazer Pro/</h5>
                        </Link>
                        <Link to={"/VMS/Blazer/Blazer Express/"} className='button_div2'>
                             
                            <h5>Blazer Express/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Blazer