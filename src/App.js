import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/Nav';
import Footer from './components/Footer';

import Home from '../src/pages/Home';
import Jobs from '../src/pages/Jobs';
import MyJobs from '../src/pages/MyJobs';
import Apply from './pages/Apply';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddJob from './pages/AddJob';



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/jobs/apply' element={<Apply/>}/>
        <Route path='/myjobs' element={<MyJobs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/addjob' element={<AddJob/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
