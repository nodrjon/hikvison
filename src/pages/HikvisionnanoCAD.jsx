import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HikvisionnanoCAD() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"http://ftp.hikvision.ru/03.%20Documents/05.%20%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F/Hikvision%20%D0%B8%20nanoCAD/Hikvision.sdf"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision.sdf</h5>
                        </Link>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/05.%20%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F/Hikvision%20%D0%B8%20nanoCAD/NanoCAD.zip' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>NanoCAD.zip</h5>
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

export default HikvisionnanoCAD