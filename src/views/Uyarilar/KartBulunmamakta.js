import React from 'react'
import uyari from '../../assets/images/Uyari.svg'
import '../../assets/css/Uyarilar.css'
import '../../assets/css/Global.css'
import {Link} from 'react-router-dom'
const KartBulunmamakta = () => {
    return (
        <section  >
             <Link className="linkYazi" to="/yasSiniri">
                <div className="uyariİsareti mt-5">
                 <img src={uyari} alt="uyari" />
                 <div className="unlem">!</div>
                </div>
             </Link>
            <div className="uyariAltindakiYazi pt-5 pb-5">
                <p className="otuzAlti mpRegular">Kişiselleştirilmiş İstanbulkart'ınız bulunmamaktadır.</p>
                <a href="https://kisisellestirme.istanbulkart.istanbul" target="_blank">  
                    <p className="otuzAlti text-decoration-underline text-color mpRegular">
                    https://kisisellestirme.istanbulkart.istanbul
                    </p>
               </a>
                <p className="otuzAlti mpRegular">sayfasından kartınızı kişiselleştirebilirsiniz.</p>
            </div>
        </section>
    )
}

export default KartBulunmamakta
