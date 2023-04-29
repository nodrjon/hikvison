import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Materialidlyap() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Documents/Материалы для проектирования/Hikvision и nanoCAD/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision и nanoCAD/</h5>
                        </Link>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/05.%20%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F/%D0%9A%D0%A2%D0%A1%D0%91%20Hikvision_%D0%A2%D0%B8%D0%BF%D0%BE%D0%B2%D0%BE%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_RAR.rar' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>КТСБ Hikvision_Типовой проект_RAR.rar</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/05.%20%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BD%D0%B0%D0%B1%D0%BB%D1%8E%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F.rar' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Проект Системы видеонаблюдения.rar</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/05.%20%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20IP-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BD%D0%B0%D0%B1%D0%BB%D1%8E%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F_%D0%A2%D0%B8%D0%BF%D0%BE%D0%B2%D0%BE%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_RAR.rar' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Система IP-видеонаблюдения_Типовой проект_RAR.rar</h5>
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

export default Materialidlyap