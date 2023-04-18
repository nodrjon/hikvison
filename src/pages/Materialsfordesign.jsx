import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Materialsfordesign() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Documents/Материалы для проектирования/Hikvision и nanoCAD/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision и nanoCAD/</h5>
                        </Link>
                        <div className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>КТСБ Hikvision_Типовой проект_RAR.rar</h5>
                        </div>
                        <div className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Проект Системы видеонаблюдения.rar</h5>
                        </div>
                        <div className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Система IP-видеонаблюдения_Типовой проект_RAR.rar</h5>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Materialsfordesign