import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Documentation2() {
  return (
    <div>
    <div className='home_div'>
        <div className='home_div2'>
            <div className='button_div'>
                <Link to={"/VMS/Blazer/Blazer Pro/Documentation/Blazer Pro 2.1/"} className='button_div2'>
                    <i id='clear_' className="material-icons">clear</i>
                    <h5>Blazer Pro 2.1/</h5>
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

export default Documentation2