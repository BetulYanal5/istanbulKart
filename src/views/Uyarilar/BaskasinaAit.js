import React from 'react'
import uyari from '../../assets/images/Uyari.svg'
import {Link} from 'react-router-dom';
import '../../assets/css/Uyarilar.css';
import '../../assets/css/Global.css';
const BaskasinaAit = () => {
    return (
        <div>
            <div className="uyariİsareti mt-5">
                    <img src={uyari} alt="uyari" />
                    <div className="unlem">!</div>
            </div>
            <div className="mpMedium uyariAltindakiYazi pt-5 pb-5">
                <p className="otuzAlti text-decoration-none mpMedium">Girmiş olduğunuz kart başkasına aittir.</p>
                <p className="yirmiDort mpRegular">Kartın size ait olduğunu düşünüyorsanız </p>
                <p className="yirmiDort mpRegular">Alo153 ile iletişime geçebilir veya farklı bir İstanbulkart ekleyebilirsiniz.</p>
            </div>
            <div className="textArea ortala pb-3">
                <Link className="linkYazi" to="/kisisellistirilmisKart">
                        <button type="submit" className="btn dogrulamaKodu mb-5 btnYazi mpHeavy btnSm" href="#">
                            GERİ
                        </button>
                    </Link>
            </div>
        </div>
    )
}

export default BaskasinaAit
