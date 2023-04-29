import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/"} className='button_div2'>
                            <h5>01. Firmware</h5>
                        </Link>
                        <Link to={"/Software/"} className='button_div2'>
                            <h5>02. Software</h5>
                        </Link>
                        <Link to={"/Documents/"} className='button_div2'>
                            <h5>03. Documents</h5>
                        </Link>
                        <Link to={"/Temperature Screening/"} className='button_div2'>
                            <h5>04. Temperature Screening</h5>
                        </Link>
                        <Link to={'/VMS/'} className='button_div2'>
                            <h5>5. VMS</h5>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home;