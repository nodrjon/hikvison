import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function IVMS4200AC() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <Link to={"/Software/iVMS-4200/iVMS-4200 AC/1.4.0.10/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.4.0.10/</h5>
                        </Link>
                        <Link to={"/Software/iVMS-4200/iVMS-4200 AC/1.6.0.6/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.6.0.6/</h5>
                        </Link>
                        <Link to={"/Software/iVMS-4200/iVMS-4200 AC/1.6.1.3/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.6.1.3/ </h5>
                        </Link>
                        <Link to={"/Software/iVMS-4200/iVMS-4200 AC/1.6.1.5/"} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.6.1.5/</h5>
                        </Link>
                        <Link to={'/Software/iVMS-4200/iVMS-4200 AC/1.6.1.6/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.6.1.6/</h5>
                        </Link>
                        <Link to={'/Software/iVMS-4200/iVMS-4200 AC/1.7.0.5/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.7.0.5/</h5>
                        </Link>
                        <Link to={'/Software/iVMS-4200/iVMS-4200 AC/1.7.1.5/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.7.1.5/ </h5>
                        </Link>
                        <Link to={'/Software/iVMS-4200/iVMS-4200 AC/1.8.0.4/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.8.0.4/</h5>
                        </Link>
                        <Link to={'/Software/iVMS-4200/iVMS-4200 AC/1.8.1.4/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.8.1.4/</h5>
                        </Link>
                        <Link to={'/Software/iVMS-4200/iVMS-4200 AC/1.9.0.4/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.9.0.4/</h5>
                        </Link>
                        <Link to={'/Software/iVMS-4200/iVMS-4200 AC/1.9.1.4/'} className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>1.9.1.4/</h5>
                        </Link>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/02.%20iVMS-4200%20AC/iVMS-4200%20AC%20Client%20Software_Datasheet_V1.4.0.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 AC Client Software_Datasheet_ V1.4.0.pdf </h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/02.%20iVMS-4200%20AC/iVMS-4200%20AC%20Client%20Software_Datasheet_V1.5.0.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 AC Client Software_Datasheet_ V1.5.0.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/02.%20iVMS-4200%20AC/iVMS-4200%20AC%20Client%20Software_Datasheet_V1.6.0.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 AC Client Software_Datasheet_ V1.6.0.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/02.%20iVMS-4200%20AC/iVMS-4200%20AC%20Client%20Software_Datasheet_V1.8.0.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 AC Client Software_Datasheet_ V1.8.0.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/02.%20iVMS-4200%20AC/iVMS-4200%20AC%20Client%20Software_Datasheet_V1.9.0.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 AC Client Software_Datasheet_ V1.9.0.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/02.%20Software/01.%20iVMS-4200/02.%20iVMS-4200%20AC/iVMS-4200%20AC%20Client_User%20Manual_1.5.0.PDF' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>iVMS-4200 AC Client_User Manual_1.5.0.PDF </h5>
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

export default IVMS4200AC