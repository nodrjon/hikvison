import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom" 

function Hikvisiontoolsmanager() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/"} className='button_div2'>
                             
                            <h5>Hikvision-Tools-Manager.zip</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Hikvisiontoolsmanager
