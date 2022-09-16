
import './App.css';
import { useSelector } from 'react-redux';


import Counter from './Features/Counter/Counter';
 import Coin from './Features/Coin/Coin';
import Theme from './Features/theme/Theme';
import FontColor from './Features/FontColor/FontColor';

function App() {
  const ThemeColor = useSelector((state)=> state.theme.Color)
  const FColor = useSelector((state)=> state.theme.Color)
  return (
    <div className="App" style={{backgroundColor: ThemeColor,color : FColor  }} >
 <Coin/>    
 <Counter/>     
 <Theme/>
 <FontColor/>

    </div>
  );
}

export default App;
