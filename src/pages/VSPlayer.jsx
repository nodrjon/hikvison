import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function VSPlayer() {
    return (
        <div> 
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/VSPlayer/v7.4.4/"} className='button_div2'>
                             
                            <h5>v7.4.4/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/VSPlayer/v7.4.4.4/"} className='button_div2'>
                             
                            <h5>v7.4.4.4/ </h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default VSPlayer