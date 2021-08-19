import React from 'react'
import '../../assets/css/Global.css';
import '../../assets/css/SmsDogrulama.css';
import '../../assets/css/Uyarilar.css'
import '../../assets/css/SmsKodu.css';
import {Link} from 'react-router-dom';
const SmsKodu = () => {
    return (
        <section className="container">
            
            <div>
              <p className="otuzAlti mpMedium pt-lg-5 pt-md-4 pt-3">
                SMS DOĞRULAMA
              </p>
            </div>
            <form className="row textArea pb-lg-5 pt-md-3">
                <div className="mb-4 col-md-6 col-12 ">
                    <label for="exampleInputEmail1" className="form-text yirmiDort text-opacity mpRegular">SMS Kodu</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
            </form>
           <div>
               <p className="mpRegular yirmiDort">Kişisel verileriniz <span href="#" className="mpMedium text-decoration-underline text-color">Aydınlatma Metni</span> ’nde belirtilen kapsamda işlenecektir, Aydınlatma Metni’ni okudum, anladım.</p>
           </div>
           <div>
           <div id="noMargin" >
            <div class="form-check " >
                    <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label mpRegular yirmiDort px-3 mb-3 " for="flexCheckDefault">
                    Kişisel verilerimin aydınlatma metni çerçevesinde aktarılmasına ve işlenmesine onay veriyorum.
                    </label>
            </div>
           </div>
           </div>
           <div className="textArea ortala py-3">
                <Link className="linkYazi" to="/kartSecimi">
                        <button type="submit" className="btn dogrulamaKodu mb-5 btnYazi mpHeavy mt-3 btnSm" href="#">
                            DEVAM
                        </button>
                    </Link>
                </div>
        </section>
    )
}

export default SmsKodu
