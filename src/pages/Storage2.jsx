import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Storage_2() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/03.%20Storage/HDD%20Compatible%20List.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HDD Compatible List.pdf</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/03.%20Storage/HDD%20Compatible%20list%20-%20Hiwatch%20091222.docx' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>HDD Compatible list - Hiwatch 091222.docx</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/03.%20Storage/Hikvision-Seagate%20Solution%20Guide%20Sept%202015.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Hikvision-Seagate Solution Guide Sept 2015.pdf</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/03.%20Storage/SD%20card%20compatible%20List.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SD card compatible List.pdf</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/03.%20Storage/SD_Storage_Card.xls' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>SD_Storage_Card.xls</h5>
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

export default Storage_2