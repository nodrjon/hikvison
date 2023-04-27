import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function VisualC() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/3rd party tools/Visual C++/2008/"} className='button_div2'>
                             
                            <h5>2008/</h5>
                        </Link>
                        <Link to={"/Software/3rd party tools/Visual C++/2013/"} className='button_div2'>
                             
                            <h5>2013/</h5>
                        </Link>
                        <Link to={"/Software/3rd party tools/Visual C++/2017/"} className='button_div2'>
                             
                            <h5>2017/</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default VisualC