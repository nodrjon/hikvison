import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Vms() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/VMS/HikCentral/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01. HikCentral/ </h5>
                        </Link>
                        <Link to={'/VMS/Blazer/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>02. Blazer/  </h5>
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

export default Vms