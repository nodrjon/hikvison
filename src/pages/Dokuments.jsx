import React from 'react'
import { Link } from "react-router-dom"
import img from "../photo/img.png"


function Dokuments() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Documents/Documents db/"} className='button_div2'>
                             
                            <h5>00. Documents db/</h5>
                        </Link>
                        <Link to={"/Documents/How to documents/"} className='button_div2'>
                             
                            <h5>01. How to documents/</h5>
                        </Link>
                        <Link to={"/Documents/Datasheets/"} className='button_div2'>
                             
                            <h5>02. Datasheets/</h5>
                        </Link>
                        <Link to={"/Documents/Accessary/"} className='button_div2'>
                             
                            <h5>03. Accessary/</h5>
                        </Link>
                        <Link to={'/Documents/Маркетинговые материалы/'} className='button_div2'>
                             
                            <h5>04. Маркетинговые материалы/</h5>
                        </Link>
                        <Link to={'/Documents/Материалы для проектирования/'} className='button_div2'>
                             
                            <h5>05. Материалы для проектирования/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Dokuments