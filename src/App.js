import logo from './logo.svg';
import './App.css';
import MenuBar from './Component/MenuBar';
import Home from './Page/Home';
import ReleaseNew from './Page/ReleaseNew';
function App() {
  return (
    
    <div className="App">
      <MenuBar/>

      <Home/>

      <ReleaseNew/>
    </div>
  );
}

export default App;
