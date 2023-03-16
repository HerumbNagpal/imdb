import './App.css';
import Search from './components/Search';
import { BrowserRouter as HashRouter, Route, Routes ,  } from 'react-router-dom';
import { InfoPage } from './components/InfoPage';

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Search/>} />
        <Route exact path='/movie/:info' element={<InfoPage/>} />
      </Routes>
    </HashRouter>

  );
}

export default App;
