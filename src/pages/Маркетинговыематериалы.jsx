import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Marketing() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Documents/Маркетинговые материалы/Новый каталог/"} className='button_div2'>
                             
                            <h5>Новый каталог/</h5>
                        </Link>
                        <Link to={"/Documents/Маркетинговые материалы/Элементы фирменного стиля/"} className='button_div2'>
                             
                            <h5>Элементы фирменного стиля/</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/04.%20%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/%20iVMS-5200%20%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B8%203.2..pdf' className='button_div2'>
                             
                            <h5>iVMS-5200 версии 3.2..pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/04.%20%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/Hikvision%20Turbo%20HD_2.pdf' className='button_div2'>
                             
                            <h5>Hikvision Turbo HD_2.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/04.%20%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82%20%D0%BD%D0%B0%20%D0%B1%D0%BE%D1%80%D1%82%D1%83-%20IP-%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D1%8B%20smart-%D1%81%D0%B5%D1%80%D0%B8%D0%B8%202015.pdf' className='button_div2'>
                             
                            <h5>Интеллект на борту- IP-камеры smart-серии 2015.pdf</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Marketing;