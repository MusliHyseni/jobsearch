import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from '../src/pages/Home';
import Jobs from '../src/pages/Jobs';
import MyJobs from '../src/pages/MyJobs';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/myjobs' element={<MyJobs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
