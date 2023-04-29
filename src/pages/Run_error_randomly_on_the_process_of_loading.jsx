import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function Run_error_randomly_on_the_process_of_loading() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/01.%20IVMS-4200/run%20error%20randomly%20on%20the%20process%20of%20loading/UpdateServer.dll' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>UpdateServer.dll</h5>
                        </a>
                        <a href='http://ftp.hikvision.ru/03.%20Documents/01.%20How%20to%20documents/01.%20IVMS-4200/run%20error%20randomly%20on%20the%20process%20of%20loading/read%20me.txt' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>read me.txt</h5>
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

export default Run_error_randomly_on_the_process_of_loading