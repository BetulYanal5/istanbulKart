import React from 'react'
import uyari from '../../assets/images/Uyari.svg';
import '../../assets/css/Uyarilar.css';
const YasSiniri = () => {
    return (
        <div>
             <div className="uyariİsareti">
                <img src={uyari} alt="uyari" />
                <div className="unlem">!</div>
            </div>
            <div className="uyariAltindakiYazi">
                <p className="uyari1Yazi mpRegular">İşlem yapabilmek için 18 yaşını doldurmanız gerekmektedir.</p>
            </div>
        </div>
    )
}

export default YasSiniri
