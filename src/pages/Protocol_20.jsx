import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Protocol_20() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/04.%20Video%20Intercom/Protocol%202.0/%D0%94%D0%BE%D0%BC%D0%BE%D1%84%D0%BE%D0%BD%D0%B8%D1%8F%20Intercom%20protocol%202.0.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Домофония Intercom protocol 2.0.pdf</h5>
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

export default Protocol_20