import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Lensselection() {
    return ( 
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/Lens selection/2.0.4.1/"} className='button_div2'>
                             
                            <h5>2.0.4.1/ </h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Lensselection