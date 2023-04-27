import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Documentation() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/VMS/HikCentral/Documentation/HikCentral 1.2/"} className='button_div2'>
                             
                            <h5>HikCentral 1.2/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Documentation