import logo from './logo.svg';
import './App.css';
import Head from './components/Head'
import MainPage from './views/MainPage/MainPage';
import Footer from './components/Footer'
import SmsDogrulama from './views/SmsDogrulama/SmsDogrulama'
import KartSecimi from './views/KisisellestirilmisKartSecimi/KartSecimi';
import KartBulunmamakta from './views/Uyarilar/KartBulunmamakta';
import YasSiniri from './views/Uyarilar/YasSiniri';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div >
       {/* <Router>
        <Head/>
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/logo" component={MainPage}/>
          <Route path="/smsDogrulama" component={SmsDogrulama}/>
          <Route path="/kartSecimi" component={KartSecimi}/>
          <Route path="/kartBulunmamakta" component={KartBulunmamakta}/>
        </Switch>
        <Footer/>
      </Router>  */}
     <Head/>
     <YasSiniri/>
     <Footer/> 
    </div>
  );
}

export default App;
