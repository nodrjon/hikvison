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
                             
                            <h5>Кожухи/</h5>
                        </Link>
                        <Link to={"/Documents/Accessary/Кронштейны/"} className='button_div2'>
                             
                            <h5>Кронштейны/</h5>
                        </Link>
                        <Link to={"/Documents/Accessary/Объективы/"} className='button_div2'>
                             
                            <h5>Объективы/ </h5>
                        </Link>
                        <Link to={"/Documents/Accessary/Кронштейны_Hikvision.xlsx/"} className='button_div2'>
                             
                            <h5>Кронштейны_ <tr></tr> Hikvision.xlsx</h5>
                        </Link>
                        <Link to={'/Documents/Accessary/Кронштейны_Hiwatch.xlsx'} className='button_div2'>
                             
                            <h5>Кронштейны_ <tr></tr> Hiwatch.xlsx</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Accessary