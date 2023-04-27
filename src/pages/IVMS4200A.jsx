import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function IVMS4200A() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Temperature Screening/iVMS-4200/v3.2.50.5/"} className='button_div2'>
                             
                            <h5>v3.2.50.5/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default IVMS4200A