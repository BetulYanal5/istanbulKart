import React from 'react'
import uyari from '../../assets/images/Uyari.svg'
import '../../assets/css/Uyarilar.css'

const KartBulunmamakta = () => {
    return (
        <section  >
            <div className="uyariİsareti">
                <img src={uyari} alt="uyari" />
                <div className="unlem">!</div>
            </div>
            <div className="uyariAltindakiYazi">
                <p className="uyari1Yazi mpRegular">Kişiselleştirilmiş İstanbulkart'ınız bulunmamaktadır.</p>
                <a href="https://kisisellestirme.istanbulkart.istanbul" target="_blank">  
                    <p className="linkYaziUyari mpRegular">
                    https://kisisellestirme.istanbulkart.istanbul
                    </p>
               </a>
                <p className="uyari1Yazi mpRegular">sayfasından kartınızı kişiselleştirebilirsiniz.</p>
            </div>
        </section>
    )
}

export default KartBulunmamakta
