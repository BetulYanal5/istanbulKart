import React from 'react'
import uyari from '../../assets/images/Uyari.svg';
import '../../assets/css/Uyarilar.css';
import '../../assets/css/Global.css'
import {Link} from 'react-router-dom';
const YasSiniri = () => {
    return (
        <div className="container">
            <Link to="/smsKodu">
                <div className="uyariİsareti mt-5">
                    <img src={uyari} alt="uyari" className="img-fluid"/>
                    <div className="unlem">!</div>
                </div>
            </Link>
            <div className="uyariAltindakiYazi col-12">
                <p className="otuzAlti text-decoration-none mpMedium mx-auto col-6 pt-5 pb-4 ">İşlem yapabilmek için 18 yaşını doldurmanız gerekmektedir.</p>
            </div>
            <div className="textArea ortala pb-3">
                <Link className="linkYazi" to="/smsDogrulama">
                        <button type="submit" className="btn dogrulamaKodu mb-5 btnYazi mpHeavy btnSm" href="#">
                            GERİ
                        </button>
                    </Link>
            </div>
        </div>
    )
}

export default YasSiniri
