import logo from './logo.svg';
import './App.css';
import Head from './components/Head'
import MainPage from './views/MainPage/MainPage';
import Footer from './components/Footer'
import SmsDogrulama from './views/SmsDogrulama/SmsDogrulama'
import KartSecimi from './views/KisisellestirilmisKartSecimi/KartSecimi';
import KartBulunmamakta from './views/Uyarilar/KartBulunmamakta';
import YasSiniri from './views/Uyarilar/YasSiniri';
import SmsKodu from './views/SmsKoduGirme/SmsKodu';
import KisisellestirilmisKart from './views/YeniKartEkleme/KisisellestirilmisKart';
import AktifDegil from './views/Uyarilar/AktifDegil'
import BaskasinaAit from './views/Uyarilar/BaskasinaAit';
import KartVar from './views/YeniKartEkleme/KartVar';
import DenizBank from './views/DenizBank/DenizBank';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div >
        <Router>
        <Head/>
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/logo" component={MainPage}/>
          <Route path="/smsDogrulama" component={SmsDogrulama}/>
          <Route path="/kartSecimi" component={KartSecimi}/>
          <Route path="/kartBulunmamakta" component={KartBulunmamakta}/>
          <Route path="/yasSiniri" component={YasSiniri}/>
          <Route path="/smsKodu" component={SmsKodu}/>
          <Route path="/kisisellistirilmisKart" component={KisisellestirilmisKart}/>
          <Route path="/aktifDegil" component={AktifDegil}/>
          <Route path="/baskasinaAit" component={BaskasinaAit}/>
          <Route path="/kartVar" component={KartVar}/>
          <Route path="/denizBank" component={DenizBank}/>
        </Switch>
        <Footer/>
      </Router>  
     {/* <Head/>
     <YasSiniri/>
     <Footer/>  */}
    </div>
  );
}

export default App;
