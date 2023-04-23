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
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01. Fimware /</h5>
                        </Link>
                        <Link to={"/Software/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>02. Software/ </h5>
                        </Link>
                        <Link to={"/Documents/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>03. Documents/ </h5>
                        </Link>
                        <Link to={"/Temperature Screening/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>04. Temperature <tr></tr> Screening/   </h5>
                        </Link>
                        <Link to={'/VMS/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>5. VMS/   </h5>
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

export default Home;