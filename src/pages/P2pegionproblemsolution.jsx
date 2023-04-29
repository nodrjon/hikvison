import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function P2pegionproblemsolution() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/01.%20IVMS-4200/p2p%20region%20problem%20solution/mac%20p2p%20region%20fix.zip' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>mac p2p region fix.zip</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/01.%20IVMS-4200/p2p%20region%20problem%20solution/patch2p2.vbs' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>patch2p2.vbs</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/01.%20IVMS-4200/p2p%20region%20problem%20solution/patch2p2_lite.vbs' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>patch2p2_lite.vbs</h5>
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

export default P2pegionproblemsolution