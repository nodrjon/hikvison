import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function BatchConfigTool() { 
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/Hikvision Tools/For Windows/BatchConfig Tool/2.0.0.6/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>2.0.0.6/ </h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/BatchConfig Tool/3.0.2.3/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>3.0.2.3/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/BatchConfig Tool/3.0.3.8/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>3.0.3.8/</h5>
                        </Link>
                        <Link to={"/Software/Hikvision Tools/For Windows/BatchConfig Tool/3.1.0.4/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>3.1.0.4/ </h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/BatchConfig Tool/3.1.2.2/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>3.1.2.2/</h5>
                        </Link>
                        <Link to={'/Software/Hikvision Tools/For Windows/BatchConfig Tool/3.1.2.2/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>3.1.2.2/</h5>
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

export default BatchConfigTool