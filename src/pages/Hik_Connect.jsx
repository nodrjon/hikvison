import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Hik_Connect() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/02.%20Hik-Connect/Hik-connect_rus.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hik-connect_rus.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/02.%20Hik-Connect/How%20to%20find%20challenge%20code%20of%20cloud%20camera.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>How to find challenge code of cloud camera.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/02.%20Hik-Connect/Unbind%20p2p.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Unbind p2p.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/02.%20Hik-Connect/%D0%94%D0%BE%D0%BC%D0%BE%D1%84%D0%BE%D0%BD%D1%8B%20%D0%B8%20hik-connect.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Домофоны и hik-connect.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/02.%20Hik-Connect/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0%20%D1%81%D0%B5%D1%82%D0%B8%20AXPro.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Настройка сети AXPro.pdf </h5>
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

export default Hik_Connect