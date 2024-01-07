import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { Services } from './Components/Services/Services';
import { Contact } from './Components/Contact/Contact';
import {Dashboard} from './Components/Dashboard/Dashboard'
import { Login } from './Components/Login/Login';

function App() {
  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/services' element={<Services/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/dashboard' element={<Dashboard/>}/> 
        <Route path='/login' element={<Login/>}/> 
      </Routes>
    </div>
  );
}

export default App;
