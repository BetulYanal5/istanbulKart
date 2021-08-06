import React from 'react'
import uyari from '../../assets/images/Uyari.svg';
import '../../assets/css/Uyarilar.css';
import {Link} from 'react-router-dom';
const YasSiniri = () => {
    return (
        <div className="container">
            <Link to="/smsKodu">
                <div className="uyariİsareti">
                    <img src={uyari} alt="uyari" />
                    <div className="unlem">!</div>
                </div>
            </Link>
            <div className="uyariAltindakiYazi col-12">
                <p className="linkYaziUyari text-decoration-none mpRegular mx-auto col-4  ">İşlem yapabilmek için 18 yaşını doldurmanız gerekmektedir.</p>
            </div>
            <div className="textArea ortala py-3">
                <Link className="linkYazi" to="/smsDogrulama">
                        <button type="submit" className="  btn dogrulamaKodu mb-5 btnYazi mpHeavy" href="#">
                            GERİ
                        </button>
                    </Link>
                </div>
        </div>
    )
}

export default YasSiniri
