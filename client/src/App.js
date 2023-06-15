import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './view/Main';
import Navbar from './components/Navbar';
import Plants from './components/Plants';
import UserGreenhouse from './components/UserGreenhouse';
import LoginReg from './components/LoginReg';

function App() {
  return (
    <div id="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<Navigate/>} path="/" to="/home"/>
        <Route path="/plants" element={<Plants />} />
        <Route path="/mygreenhouse/" element={<UserGreenhouse />} />
        <Route path="/logandreg" element={<LoginReg />} />
      </Routes>
    </div>
  );
}

export default App;
