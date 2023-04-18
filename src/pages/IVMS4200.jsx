import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function IVMS4200() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/iVMS-4200/iVMS-4200 full version/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>01. iVMS-4200 full version/ </h5>
                        </Link>
                        <Link to={"/Software/iVMS-4200/iVMS-4200 AC/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>02. iVMS-4200 AC/ </h5>
                        </Link>
                        <Link to={"/Software/iVMS-4200/iVMS-4200 for macosx/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>04. iVMS-4200 for macosx/ </h5>
                        </Link>
                        <Link to={"/Software/iVMS-4200/iVMS-4200 Video Wall client/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>05. iVMS-4200 Video Wall client/</h5>
                        </Link>
                        <Link to={'/Software/iVMS-4200/iVMS-4200 mobile/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>06. iVMS-4200 mobile/ </h5>
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

export default IVMS4200;