import React from 'react'
import logo from '../../assets/images/denizBank.svg';
import '../../assets/css/DenizBank.css';
const DenizBank = () => {
    return (
        <section className="container">
            <div className="logoHiza mtop">
                <img src={logo} alt="logo" />
            </div>
            <div className="col-12 mbottom pt-4" >
                <p className="otuzAlti text-opacity mpMedium  col-8 mx-auto ">Denizbank AŞ kimlik doğrulama sayfasına</p>
                <p className="otuzAlti text-opacity mpMedium  col-4 mx-auto">yönlendiriliyorsunuz.</p>
            </div>
        </section>
    )
}

export default DenizBank
