import React, {useState} from 'react'
import '../../assets/css/Global.css'
import '../../assets/css/Uyarilar.css'
import '../../assets/css/SmsDogrulama.css';
import '../../assets/css/KisisellestirilmisKart.css'
import kartOn from '../../assets/images/kartOn.svg';
import kartArka from '../../assets/images/kartArka.svg';
import '../../assets/css/KartSecimi.css';
import eskiKartOn from '../../assets/images/eskiKartOn.png';
import eskiKartArka from '../../assets/images/eskiKartArka.png';
import {Link} from 'react-router-dom'
const KisisellestirilmisKart = () => {

    const [which, setWhich] = useState(1)
    return (
        
        <section className="container">
            <div>
                <p className="mpMedium yirmiDortKisiselKart mt-lg-5 mt-md-4 mt-3">Eklemek istediğiniz yeni İstanbulkart T.C. Kimlik Numaranızla eşleştirilecektir.</p>
            </div>
            <form className="row textArea ">
                <div className="mb-5  col-md-6 col-12 " id="kisisellestirilmisKart">
                    <label for="exampleInputEmail1" className="yirmiDortKisiselKart mpMedium mb-2">Kart veya Seri Numarası giriniz</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
            </form>
            <div className="col-12 container">
                
                <div className="row ">
               
                 <div className="col-12 text-center">
                     <div className="row">
                        <div className="col-6 text-end">
                            <button type="submit" className={`kisiselKartBtn mb-5 mpMedium col-lg-6 ${which===1 ? 'active' : ""}`} onClick={()=> setWhich(1)}>
                                            Yeni Kart Görseli
                            </button>
                        </div>
                        <div className="col-6 text-start">
                            <button   type="submit" className={`kisiselKartBtn mb-5 mpMedium col-lg-6 ${which===2 ? 'active' : ""}`} onClick={()=> setWhich(2)}>
                                            Eski Kart Görseli
                            </button>
                        </div>
                    </div>
                 </div>
                </div>
            
        </div>
        <div className="col-12 container">
            <div className="row ">
                {which===1 ?
                    <div className="col-12 text-center ">
                        <img src={kartOn} alt="kartın-on-yüzü" className="kartlar "/>
                        <img src={kartArka} alt="kartın-arka-yüzü"  className="kartlar imgCizgi"/>
                    </div>
                    : null
                }
                {which===2 ?
                    <div className="col-12 text-center ">
                        <img src={eskiKartOn} alt="kartın-on-yüzü" className="kartlar eskiKart"/>
                        <img src={eskiKartArka} alt="kartın-arka-yüzü"  className=" imgCizgi "/>
                    </div>
                : null
                }
            </div>
        </div>      
            <div  className=" container col-12 ">
                <p className="mpRegular fs-6 text-opacity mt-3 mb-5 text-center">
                İstanbulkart’ınızın ön yüzündeki 18 haneli kart numarası ya da arka yüzündeki 14 haneli seri numarasını giriniz.
                </p>
                <div className="col-lg-9 container">
                <p className="yirmiDortKisiselKart kisiselKartMadde mpRegular text-start">Seçtiğiniz kartın sizde olduğuna ve aktif olarak kullandığınıza emin olun.</p>
                <p className="yirmiDortKisiselKart kisiselKartMadde mpRegular text-start mb-3">Destek paketiniz, seçmiş olduğunuz İstanbulkart'a yüklenecektir.</p>
                </div>
            </div>
            <div className="textArea ortala py-3">
                <Link className="linkYazi" to="/denizBank">
                        <button type="submit" className="btn dogrulamaKodu mb-5 btnYazi mpHeavy btnSm" href="#">
                            DEVAM
                        </button>
                    </Link>
                </div>

        </section>
    )
}

export default KisisellestirilmisKart
