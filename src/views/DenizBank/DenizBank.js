import React from 'react'
import logo from '../../assets/images/denizBank.svg';
import '../../assets/css/DenizBank.css';
import '../../assets/css/Global.css'
const DenizBank = () => {
    return (
        <section className="container mt-5 mb-5 py-5">
            <div className="logoHiza ">
                <img src={logo} alt="logo" className="img-fluid"/>
            </div>
            <div>
                <p className="otuzAlti text-opacity hizala mt-4 mx-auto col-10">Denizbank AŞ kimlik doğrulama sayfasına yönlendiriliyorsunuz.</p>
            </div>
        </section>
    )
}

export default DenizBank
