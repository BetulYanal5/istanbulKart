import React from 'react'
import '../../assets/css/Uyarilar.css';
import '../../assets/css/KisisellestirilmisKart.css'
import {Link} from 'react-router-dom';
import eskiKartOn from '../../assets/images/eskiKartOn.png';
import eskiKartArka from '../../assets/images/eskiKartArka.png';
const KartVar = () => {
    return (
        <section className="container">
            <div>
                <p className="mpMedium kartEkleYazi mt-5 mb-5">Eklemek istediğiniz yeni İstanbulkart T.C. Kimlik Numaranızla eşleştirilecektir.</p>
            </div>
            <form className="row textArea ">
                <div className="mb-5  col-md-6 col-12 " id="kisisellestirilmisKart">
                    <label for="exampleInputEmail1" className=" kartEkleYazi mpMedium mb-2">Kart veya Seri Numarası giriniz</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
            </form>
            <div className="col-12 container">
                <Link to="/kartSecimi">
                    <div className="row">
                    <div className="col-12 text-center">
                        <button type="submit" className="kisiselBtn kisiselKartBtn mb-5 btnYazi mpMedium col-6 me-3 yeniKartBtn" href="#">
                                        Yeni Kart Görseli
                        </button>
                        <button type="submit" className=" kisiselKartBtn mb-5  mpMedium col-6 " href="#">
                                        Eski Kart Görseli
                        </button>
                    </div>
                    </div>
                </Link>
            </div>
            <div className="col-12 container">
                <div className="row ">
                    {/* <Link to="/kartSecimi"> */}
                        <div className="col-12 text-center ">
                        <img src={eskiKartOn} alt="kartın-on-yüzü" className="kartlar me-4"/>
                        <img src={eskiKartArka} alt="kartın-arka-yüzü"  className="kartlar imgCizgi"/>
                        </div>
                    {/* </Link> */}
                </div>
            </div>
            <div  className=" container col-12 ">
                <p className="mpRegular fs-6 text-secondary  mt-3 mb-5 text-center">
                İstanbulkart’ınızın ön yüzündeki 18 haneli kart numarası ya da arka yüzündeki 14 haneli seri numarasını giriniz.
                </p>
                <div className="col-9 container">
                <p className="kisiselKartMadde mpRegular text-start">Seçtiğiniz kartın sizde olduğuna ve aktif olarak kullandığınıza emin olun.</p>
                <p className="kisiselKartMadde mpRegular text-start mb-5">Destek paketiniz, seçmiş olduğunuz İstanbulkart'a yüklenecektir.</p>
                </div>
            </div>
            <div className="textArea ortala py-3">
                <Link className="linkYazi" to="/denizBank">
                        <button type="submit" className=" btn dogrulamaKodu mb-5 btnYazi mpHeavy" href="#">
                            DEVAM
                        </button>
                    </Link>
                </div>

        </section>
    )
}

export default KartVar
