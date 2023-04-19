import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function AccessControl2() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/Access Control/Access Controller/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1. Access Controller/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Card Reader/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>2. Card Reader/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Secure Module/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>3. Secure Module/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/Access Control/Terminal/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>4. Terminal/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/Access Control/Card Issuer & Fingerprint Enrollment Scanner/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>5. Card Issuer & Fingerprint Enrollment Scanner/</h5>
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

export default AccessControl2