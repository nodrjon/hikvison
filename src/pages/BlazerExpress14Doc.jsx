import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function BlazerExpress14Doc() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/5.%20VMS/02.%20Blazer/02.%20Blazer%20Express/02.%20Documentation/Blazer%20Express%201.4/Blazer%20Express%20V1.4_FAQ_201701026.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Blazer Express V1.4_FAQ_ 201701026.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/5.%20VMS/02.%20Blazer/02.%20Blazer%20Express/02.%20Documentation/Blazer%20Express%201.4/UD07555B_Baseline_Quick%20Start%20Guide%20of%20Blazer%20Express%20Station_V1.4_20171013.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>UD07555B_ Baseline_Quick Start Guide of Blazer E..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/5.%20VMS/02.%20Blazer/02.%20Blazer%20Express/02.%20Documentation/Blazer%20Express%201.4/UD07556B_Blazer%20Express_Spec_1.4_20171012.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>UD07556B_Blazer Express_Spec_ 1.4_20171012.pdf</h5>
                        </a>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>User Manual of Blazer Express Control Client V1..</h5>
                        </Link>
                        <Link to={"/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>User Manual of Blazer Express Web Client V1.4.chm</h5>
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

export default BlazerExpress14Doc