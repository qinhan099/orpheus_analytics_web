import './App.css';
import * as React from 'react';
import MainPage from './Componenets/MainPage';
import NLPTable from './Componenets/NLPTable';
import { Route, Routes} from 'react-router-dom';
import NavBar from './Componenets/NavBar';
import HeatMap from './Componenets/HeatMap';

function App() {

   


  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element= { <MainPage/>} />
        <Route path='/nlp' element= { <NLPTable/>}/>
        <Route path='/heatmap' element={ <HeatMap/>}/>
      </Routes>
    </div>
  );
}

export default App;
