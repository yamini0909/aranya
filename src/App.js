import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SearchConfig from './components/SearchConfig';
import InfoPage from './components/InfoPage';
import Premium from './components/Premium';
import Advantages from './components/Advantages';
import Surrounding from './components/Surrounding';
import Contact from './components/Contact';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage/> */}
      {/* <Header/> */}
      <LandingPage/>
      <SearchConfig/>
      <InfoPage/>
      <Premium/>
      <Advantages/>
      <Surrounding/>
      <Contact/>
    </div>
  );
}

export default App;
