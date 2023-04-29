import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Video() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/02%20NVR/03%20Video/I%20Series%20NVR-Search%20by%20Temperature.mp4' className='button_div2'>
                             
                            <h5>I Series NVR-Search by Temperature.mp4</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/02%20NVR/03%20Video/I%20Series%20NVR-Temperature%20Screening.mp4' className='button_div2'>
                             
                            <h5>I Series NVR-Temperature Screening.mp4</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/02%20NVR/03%20Video/Mask%20Detection%20%26%20Temperature%20Screening.mp4' className='button_div2'>
                             
                            <h5>Mask Detection & Temperature Screening.mp4</h5>
                        </a>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Video