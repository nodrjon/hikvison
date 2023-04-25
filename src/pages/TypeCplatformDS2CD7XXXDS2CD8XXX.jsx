import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"


function TypeCplatformDS2CD7XXXDS2CD8XXX() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/Камеры, выпущенные до 2012 года/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Камеры, выпущенные до 2012 года/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/Камеры, выпущенные после 2012 года/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Камеры, выпущенные после 2012 года/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/README.TXT/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>README.TXT</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/IP Camera/2 series - 2XXX/Old models/TypeC platform - DS-2CD7XXX DS-2CD8XXX/html'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Как определить дату выпуск камеры.html</h5>
                        </Link>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeCplatformDS2CD7XXXDS2CD8XXX