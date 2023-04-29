import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Obektiv() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/03.%20Accessary/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B/HF3417D-12MPIR.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HF3417D-12MPIR.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/03.%20Accessary/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B/HV1140D-8MPIR.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HV1140D-8MPIR.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/03.%20Accessary/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B/HV3816D-8MPIR.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HV3816D-8MPIR.pdf</h5>
                        </a>
                        <a target='_blank' href='hhttp://ftp.hikvision.ru/03.%20Documents/03.%20Accessary/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B/TV0550D-MPIR.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TV0550D-MPIR.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/03.%20Accessary/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B/TV2712D-MPIR.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TV2712D-MPIR.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/03.%20Accessary/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B/TV2810D-MPIR.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>TV2810D-MPIR.pdf</h5>
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

export default Obektiv