import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Softwarepackage() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hik-Central/Software package/2.0.1/"} className='button_div2'>
                             
                            <h5>2.0.1/</h5>
                        </Link>
                        <Link to={"/Software/Hik-Central/Software package/2.2.1/"} className='button_div2'>
                             
                            <h5>2.2.1/</h5>
                        </Link>
                        <Link to={"/Software/Hik-Central/Software package/2.3/"} className='button_div2'>
                             
                            <h5>2.3/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Softwarepackage;