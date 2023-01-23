import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInSide from './component/SignInSide';
import SignUp from './component/SignUp';
import GameplayStats from './component/gameplayStats.component';
import TypeStats from './component/typeStats.component';
import TrainerStats from './component/trainerStats.component';
import TrainerProfile from './component/trainerProfile.component';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInSide />}/>
        <Route path='/Login' element={<SignInSide />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/GameplayMedals' element={<GameplayStats/>}/>
        <Route path='/TypeMedals' element={<TypeStats/>}/>
        <Route path='/TrainerStats' element={<TrainerStats/>}/>
        <Route path='/TrainerProfile' element={<TrainerProfile/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;