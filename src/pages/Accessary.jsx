import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Accessary() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Documents/Accessary/Кожухи/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Кожухи/</h5>
                        </Link>
                        <Link to={"/Documents/Accessary/Кронштейны/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Кронштейны/</h5>
                        </Link>
                        <Link to={"/Documents/Accessary/Объективы/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Объективы/ </h5>
                        </Link>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/03.%20Accessary/%D0%9A%D1%80%D0%BE%D0%BD%D1%88%D1%82%D0%B5%D0%B9%D0%BD%D1%8B_Hikvision.xlsx' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Кронштейны_  Hikvision.xlsx</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/03.%20Accessary/%D0%9A%D1%80%D0%BE%D0%BD%D1%88%D1%82%D0%B5%D0%B9%D0%BD%D1%8B_Hiwatch.xlsx' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Кронштейны_  Hiwatch.xlsx</h5>
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

export default Accessary