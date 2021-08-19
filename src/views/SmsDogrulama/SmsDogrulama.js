import React from 'react'
import '../../assets/css/Global.css'
import '../../assets/css/SmsDogrulama.css'
import {Link} from 'react-router-dom'
const SmsDogrulama = () => {
    return (
        <div >
         <section className="container" >
             <div >
                 <p className="otuzAlti pt-4 mpMedium">
                     SMS DOĞRULAMA
                 </p>
                <p className="yirmiDort text-opacity pb-5 mpRegular">
                    İstanbulkart sorgulama sürecine başlayabilmek için aşagıdaki bilgileri eksiksiz doldurunuz.
                </p>
             </div>
            <form className="row textArea ">
                <div className="mb-5  col-md-6 col-12 ">
                    <label for="exampleInputEmail1" className="form-text yirmiDort text-opacity mpRegular">Ad</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-5  col-md-6 col-12">
                    <label for="exampleInputPassword1" className="form-text yirmiDort text-opacity mpRegular">Soyad</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-5  col-md-6 col-12">
                    <label for="exampleInputEmail1" className="form-text yirmiDort text-opacity mpRegular">TCKN</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-5  col-md-6 col-12">
                    <label for="exampleInputEmail1" className="form-text yirmiDort text-opacity mpRegular">Telefon Numarası</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="col-12">
                    <div className="row ">
                        <div className="col-12"> 
                        <div className="row align-items-end justify-content-center">
                            <div className="col-3">
                                <a className="dogrulamaKodu text-white d-block" href="#">W34DS</a>
                            </div>
                            <div className="col-3">
                                <label htmlFor="aa" className="form-text yirmiDort text-opacity mpRegular">Güvenlik Kodu</label>
                                <input type="text" className="form-control kod " />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="textArea ortala py-3 devamSm ">
                    <Link className="linkYazi" to="/kartSecimi">
                            <button type="submit" className="btn dogrulamaKodu mb-5 btnYazi mpHeavy btnSm" href="#">
                                DEVAM
                            </button>
                    </Link>
                </div>
            </form>
          </section>
        </div>
    )
}

export default SmsDogrulama
