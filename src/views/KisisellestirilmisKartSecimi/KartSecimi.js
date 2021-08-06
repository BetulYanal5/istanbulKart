import React from 'react'
import kart1 from '../../assets/images/Group249.svg'
import kart2 from '../../assets/images/Group266.svg'
import arti from '../../assets/images/Group465.svg'
import '../../assets/css/KartSecimi.css'
import '../../assets/css/SmsDogrulama.css'
import {Link} from 'react-router-dom'
const KartSecimi = () => {
    return (
        <section className="container">
            <p className="kartSecimYazi mpRegular ">Kişiselleştirilmiş İstanbulkart Seçimi</p>
            <p className=" ortaBaslik mpRegular">İstanbulkart Seçiniz </p>
            <div className="col-12">
                <div className="row " id="checkAyarlama">
                    <div class="form-check col-lg-4 col-md-6 col-12 text-center">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                        <label class="form-check-label" for="flexRadioDefault1">
                        <img src={kart1} alt="1.istanbulkart" />
                        <p className="col-8 mx-auto text-center kartNo mpRegular"> 6370 6000 0000 0000 043515A111D804</p>
                        </label>
                    </div>
                    <div class="form-check col-lg-4 col-md-6 col-12 text-center ">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                        <img src={kart2} alt="1.istanbulkart" />
                        <p className="col-8 mx-auto text-center kartNo mpRegular"> 6370 6000 0000 0000 043515A111D804</p>
                        </label>
                    </div>
                </div>
            </div>
            <div >
              <Link to="/kisisellistirilmisKart">
                <button type="submit" className=" btn addBtn" href="#">
                        <a className=" ortala">
                            <a href="#">
                                <img src={arti} alt="ekle-işareti" className="arti " />
                                <span className="kartEkleHover">Başka Bir Kart Ekle</span>
                            </a>
                        </a>
                 </button>
               </Link>
            </div>
            <div>
                <p className="secimMadde mpRegular">Seçtiğiniz kartın sizde olduğuna ve aktif olarak kullandığınıza emin olun.</p>
                <p className="secimMadde mpRegular">Destek paketiniz, seçmiş olduğunuz İstanbulkart'a yüklenecektir.</p>
            </div>
            <div className="textArea ortala py-3">
                <Link className="linkYazi" to="/kartBulunmamakta">
                    <button type="submit" className="  btn dogrulamaKodu mb-5 btnYazi mpHeavy" href="#">
                        <a href="#">DEVAM</a>
                    </button>
                </Link>
            </div>
         </section>

    )
}

export default KartSecimi
