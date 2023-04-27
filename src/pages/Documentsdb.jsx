import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Documentsdb() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/00.%20Documents%20db/1.txt' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.txt </h5>
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

export default Documentsdb