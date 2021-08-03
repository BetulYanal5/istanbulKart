import logo from './logo.svg';
import './App.css';
import Head from './components/Head'
import MainPage from './views/MainPage/MainPage';
import Footer from './components/Footer'
import SmsDogrulama from './views/SmsDogrulama/SmsDogrulama'
function App() {
  return (
    <div >
     <Head/>
     {/* <MainPage/> */}
     <SmsDogrulama/>
     <Footer/>
    </div>
  );
}

export default App;
