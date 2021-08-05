import logo from './logo.svg';
import './App.css';
import Head from './components/Head'
import MainPage from './views/MainPage/MainPage';
import Footer from './components/Footer'
import SmsDogrulama from './views/SmsDogrulama/SmsDogrulama'
import KartSecimi from './views/KisisellestirilmisKartSecimi/KartSecimi';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div >
       <Router>
        <Head/>
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/smsDogrulama" component={SmsDogrulama}/>
          <Route path="/kartSecimi" component={KartSecimi}/>
        </Switch>
        <Footer/>
      </Router> 
     {/* <Head/>
      <MainPage/> 
     <SmsDogrulama/> 
     <KartSecimi/>
     <Footer/> */}
    </div>
  );
}

export default App;
