import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function PTZ() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Firmware/Hikvision/PTZ/R3 - DS-2DFXXXX/"} className='button_div2'>
                             
                            <h5>0. R3 - DS-2DFXXXX/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/PTZ/R7 - DS-2DExxxxW, DS-2DFxxxxW/"} className='button_div2'>
                             
                            <h5>1. R7 - DS-2DExxxxW, DS-2DFxxxxW/</h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/PTZ/G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/"} className='button_div2'>
                             
                            <h5>2. G3 - DS-2DExxxx(S5),DS-2SE7Cxxxx(S5)/ </h5>
                        </Link>
                        <Link to={"/Firmware/Hikvision/PTZ/G3 - DS-2DFxxxx(S5)/"} className='button_div2'>
                             
                            <h5>3. G3 - DS-2DFxxxx(S5)/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/PTZ/H5 - DS-2DFxxxxX(T2)/'} className='button_div2'>
                             
                            <h5>4. H5 - DS-2DFxxxxX(T2)/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/PTZ/H7 - DS-2DFxxxxX(T3),DS-2DYxxxx(T3)/'} className='button_div2'>
                             
                            <h5>6. H7 - DS-2DFxxxxX(T3),DS-2DYxxxx(T3)/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/PTZ/E7 - DS-2DExxxx(S6))/'} className='button_div2'>
                             
                            <h5>7. E7 - DS-2DExxxx(S6)/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/PTZ/H8 - DS-2DExxxx(T5)/'} className='button_div2'>
                             
                            <h5>8. H8 - DS-2DExxxx(T5)/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/PTZ/H8 - DS-2DFxxxx(T5)/'} className='button_div2'>
                             
                            <h5>8. H8 - DS-2DFxxxx(T5)/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/PTZ/PanoVu/'} className='button_div2'>
                             
                            <h5>9. PanoVu/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/PTZ/TandemVu/'} className='button_div2'>
                             
                            <h5>9. TandemVu/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/PTZ/Old models/'} className='button_div2'>
                             
                            <h5>Old models/</h5>
                        </Link>
                        <Link to={'/Firmware/Hikvision/PTZ/Positioning System Firmware/'} className='button_div2'>
                             
                            <h5>Positioning System Firmware/</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/01.%20Firmware/01.%20Hikvision/03.%20PTZ/%21%20%D0%9F%D0%B5%D1%80%D0%B5%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0%20%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D1%8B.pdf' className='button_div2'>
                             
                            <h5>! Перепрошивка камеры.pdf</h5>
                        </a>
                        <Link to={'/'} className='button_div2'>
                             
                            <h5>How to choose firmware PTZ devices Hikvision.xlsx</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default PTZ