import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HikCentral2() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/VMS/HikCentral/Download/"} className='button_div2'>
                             
                            <h5>Download/</h5>
                        </Link>
                        <Link to={"/VMS/HikCentral/Documentation/"} className='button_div2'>
                             
                            <h5>Documentation/</h5>
                        </Link>
                        <Link to={"/VMS/HikCentral/How-to/"} className='button_div2'>
                             
                            <h5>How-to/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default HikCentral2