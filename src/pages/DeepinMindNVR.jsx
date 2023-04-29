import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function DeepinMindNVR() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <div className='button_div2'>
                             
                            <h5>DZ_K51_A8_X_ML_ <tr></tr> STD_ V4.40.800_210428.zip</h5>
                        </div>
                        <div className='button_div2'>
                             
                            <h5>DZ_K51_H930_FA_ML_ <tr></tr> STD_V4.40.710 <tr></tr> _210427.zip </h5>
                        </div>
                        <div className='button_div2'>
                             
                            <h5>DZ_K51_H930 <tr></tr> _X_ML_STD <tr></tr> _V4.40.710_210427.zip</h5>
                        </div>
                        <div className='button_div2'>
                             
                            <h5>DZ_K51_K81 <tr></tr> _X_ML_STD_ <tr></tr> V4.22.110_200515.zip</h5>
                        </div>
                        <div className='button_div2'>
                             
                            <h5>DZ_K51_K81 <tr></tr> _X_ML_STD_V4.22. <tr></tr> 110_200609.zip</h5>
                        </div>
                        <Link to={"/Temperature Screening/NVR/Firmware/DeepinMind NVR/Read me!!!!.txt"} className='button_div2'>
                             
                            <h5>Read me!!!!.txt</h5>
                        </Link>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default DeepinMindNVR