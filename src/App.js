// import logo from './logo.svg';
import './App.css';
import Intro from './Component/Intro';
import NavigationBar from './Component/NavigationBar';
import TrendingGame from './Component/TrendingGame';
import BestGame from './Component/BestGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/landingPage.css";

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar/>  
        <Intro/>
      </div>
      <div className='trending'>
        <TrendingGame/>
      </div>
      <div className='best'>
        <BestGame/>
      </div>
    </div>
  );
}

export default App;
