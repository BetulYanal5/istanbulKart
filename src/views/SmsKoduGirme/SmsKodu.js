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
              <p className="headYaziSms mpMedium mt-4">
                SMS DOĞRULAMA
              </p>
            </div>
            <form className="row textArea py-5">
                <div className="mb-5  col-md-6 col-12 ">
                    <label for="exampleInputEmail1" className="form-text opacityYazi mpRegular">SMS Kodu</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
            </form>
           <div>
               <p className="mpRegular uyari1Yazi">Kişisel verileriniz <a href="#" className="mpMedium linkYaziUyari smsKoduYazi">Aydınlatma Metni</a> ’nde belirtilen kapsamda işlenecektir, Aydınlatma Metni’ni okudum, anladım.</p>
           </div>
           <div>
           <div id="noMargin">
           <div class="form-check" >
                <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label mpRegular uyari1Yazi px-3 mb-5" for="flexCheckDefault">
                Kişisel verilerimin aydınlatma metni çerçevesinde aktarılmasına ve işlenmesine onay veriyorum.
                </label>
           </div>
           </div>
           </div>
           <div className="textArea ortala py-3">
                <Link className="linkYazi" to="/kartSecimi">
                        <button type="submit" className=" btn dogrulamaKodu mb-5 btnYazi mpHeavy mt-5" href="#">
                            DEVAM
                        </button>
                    </Link>
                </div>
        </section>
    )
}

export default SmsKodu
