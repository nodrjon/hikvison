import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function HiwatchEcolineIPC() {
  return (
    <div>
      <div className='home_div'>
        <div className='home_div2'>
          <div className='button_div'>
            <Link to={"/Firmware/Hiwatch Ecoline/IPC/IPC-B020 IPC-T020/"} className='button_div2'>
               
              <h5>IPC-B020 IPC-T020/</h5>
            </Link>
            <Link to={"/Firmware/Hiwatch Ecoline/IPC/IPC-B020(B)  IPC-T020(B)/"} className='button_div2'>
               
              <h5>IPC-B020(B)  IPC-T020(B)/ </h5>
            </Link>
          </div>
           
        </div>
      </div>
    </div>
  )
}

export default HiwatchEcolineIPC