import React from 'react'
import maskGroup2 from '../../assets/images/MaskGroup2.png'
import '../../assets/css/MainPage.css'
import '../../assets/css/Global.css'

const MainPage = () => {
    return (
        <div>
            <div >
                <img className="img-fluid" src={maskGroup2} alt="istanbul-kart-reklam" />
            </div>
            <section className="mainP container">
                <p className="headYazi">1200 tl’ye varan 0 faizli destek paketine başvurmak ve tarafınıza tanımlanacak özel faizli kredi limitini öğrenmek için <u>tıklayın</u> </p>
                <p className="headYazi">Kredi kartı üstünden 500 tl’ye varan destek paketinin detayları ve başvurusu için <u>tıklayın</u></p>
                <div className="headYazi">Kullanım Koşulları;</div>
                <div>
                 <p className="yaziKucuk">Kampanya’dan sadece İstanbulkartı ile TCKN bilgisini eşleştirmiş müşteriler yararlanabilecektir.</p>
                 <div className="yaziKucuk">  Kampanya Banka tarafından yapılacak değerlendirme neticesinde destek paketi onaylanan bireysel müşteriler (gerçek kişi) için geçerlidir. Banka, faiz oranlarında ve kampanya koşullarında değişiklik yapma, onaylanan miktarın kullanımı için son kararı verme, kefil ve ek belge isteme, destek paketine ilişkin tutarın kullandırmama hakkına sahiptir. Başvuruya ilişkin ilgili belgeleri imzalamadan önce faiz oranı, tüm masraf, ücret ve komisyon hakkında tarafınıza bilgi formu ile bilgilendirme yapılacaktır.   </div>
                 <div className="yaziKucuk">  Başvurular müşterinin kendisine ait cep telefonu numarası ve TC kimlik numarası ile yapılmalıdır.  </div> 
                 <div className="yaziKucuk">  Başvuru sonucu sms ile de iletilecektir.</div>
                 <div className="yaziKucuk">  Başvurusu onaylanan müşteriler, sistem üzerinden ya da tüm Banka şubelerinden destek paketinde onaylanan tutarı kullanabilecektir. </div>  
                 <div className="yaziKucuk">  Tahsis ücreti ve hayat sigortasi bulunmamaktadır.</div>
                 <div className="yaziKucuk">  Destek paketi 12 ay vadede 1.200 TL ya da 6 ay vadede 600 TL için geçerli olup, bu vade ve tutarın üzerinde bir kullandırım yapılamaz.</div> 
                 <div className="yaziKucuk">   Kampanyadan bir müşteri sadece 1 kez yararlanabilir. İkinci bir kullandırım mümkün değildir. </div> 
                 <div className="yaziKucuk">  Destek paketinden faydalanmak için Banka'da hesap açılması gerekmektedir.</div>
                 <div className="yaziKucuk"> Destek paketinden faydalanmak için Banka’da hesap açılması gerekmektedir. Kampanyadan faydalanan İstanbulkart kullanıcıları ek olarak 500TL’ye kadar sıfır faizli taksitli nakit avans avantajından da faydalanabilecektir. Detay için (detay için kelimelerine tıklandığında sayfaya yönlendirilecek.) </div> 
                 <div className="yaziKucuk">  Banka, kampanyanın koşullarını değiştirme veya kampanyayı değiştirme hakkına sahiptir. </div> 
                 <div className="yaziKucuk">Kampanya bitiş tarihi ………..’dir.</div>
                </div>
            </section>
        </div>
    )
}

export default MainPage
