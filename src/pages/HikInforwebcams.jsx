import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HikInforwebcams() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HIK-IN.zip</h5>
                        </a>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HikInforwebcams