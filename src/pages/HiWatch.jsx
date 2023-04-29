import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HiWatch() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/04.%20Video%20Intercom/HiWatch/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82%D0%B0%20DS-D100IKWF.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Настройка комплекта DS-D100IKWF.pdf</h5>
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

export default HiWatch