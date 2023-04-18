import React from 'react'
import img from "../photo/img.png"
import { Link } from "react-router-dom"

function QuickInstallation() {
    return (
        <div>
            <div className='home_div'>
                <div className='home_div2'>
                    <div className='button_div'>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/01%20Thermal%20Camera/02%20Quick%20Installation%26Configuration%20Guide/Temperature%20Screening%20Blackbody%20Installation%20Guide.png' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Temperature Screening Blackbody Installation Gu..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/01%20Thermal%20Camera/02%20Quick%20Installation%26Configuration%20Guide/UD13322B_Baseline_User%20Manual%20of%20Thermal%20%26%20Optical%20Bi-spectrum%20Network%20Bullet_Turret%20Camera_V5.5.16_20190110.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>UD13322B_Baseline_User Manual of Thermal & Opti..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/01%20Thermal%20Camera/02%20Quick%20Installation%26Configuration%20Guide/%5BPublic%5D%201217B%262617B%20Temperature%20Screening%20Thermographic%20Installation%20Guide20200515.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>[Public] 1217B&2617B Temperature Screening Ther..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/01%20Thermal%20Camera/02%20Quick%20Installation%26Configuration%20Guide/%5BPublic%5D%202636B%262637B%20Temperature%20Screening%20Thermographic%20Installation%20Guide20200515.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>[Public] 2636B&2637B Temperature Screening Ther..</h5>
                        </a>
                        <a target='_blank' href='http://ftp.hikvision.ru/04.%20Temperature%20Screening/01%20Thermal%20Camera/02%20Quick%20Installation%26Configuration%20Guide/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE_%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F_%D0%BF%D0%BE_%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B5_%D0%B8_%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B5_%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2_%D0%B4%D0%BB%D1%8F_%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D1%8F_%D1%82%D0%B5%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D1%8B.pdf' className='button_div2'>
                            <i id='clear_' className="material-icons">clear</i>
                            <h5>Руководство_ <tr></tr> пользователя_ по_установке <tr></tr> _и_настрой..</h5>
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

export default QuickInstallation;