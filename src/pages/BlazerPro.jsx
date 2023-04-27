import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function BlazerPro() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/VMS/Blazer/Blazer Pro/Download/"} className='button_div2'>
                             
                            <h5>Download/</h5>
                        </Link>
                        <Link to={"/VMS/Blazer/Blazer Pro/Documentation/"} className='button_div2'>
                             
                            <h5>Documentation/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default BlazerPro