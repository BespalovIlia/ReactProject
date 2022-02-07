import React, { Component } from 'react';
import './App.css';
import Header from './componetns/Header/Header';
import Navbar from './componetns/Navbar/Navbar';
import Profile from './componetns/Profile/Profile';
import Dialogs from './componetns/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './componetns/News/News';
import Settings from './componetns/Settings/Settings';
import Music from './componetns/Music/Music';

const App = () => {
  return (
    <BrowserRouter>
      <div className ='app-wrapper'>
         <Header />
         <Navbar />
         <div className='app-wrapper-content'>
          <Routes>
            <Route path ='/profile/*' element ={<Profile />} />
            <Route path ='/messages/*' element ={<Dialogs />} />
            <Route path ='/news/*' element ={<News />} />
            <Route path ='/music/*' element ={<Music />} />
            <Route path ='/settings/*' element ={<Settings />}/>
          </Routes>
         </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
