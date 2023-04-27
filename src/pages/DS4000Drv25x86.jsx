import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function DS4000Drv25x86() {
    return ( 
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS4000Drv.inf</h5>
                        </a>
                        <a target='_blank' href='' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS40xxDrv.sys</h5>
                        </a>
                        <a target='_blank' href='' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS41xxDrv.sys</h5>
                        </a>
                        <a target='_blank' href='' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS41xxHDDrv.sys</h5>
                        </a>
                        <a target='_blank' href='' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS42xxDrv.sys </h5>
                        </a>
                        <a target='_blank' href='' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>DS43xxDrv.sys</h5>
                        </a>
                        <a target='_blank' href='' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Driver Install.exe </h5>
                        </a>
                        <a target='_blank' href='' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>hikdrv.cat</h5>
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

export default DS4000Drv25x86