import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSide from './component/SignInSide';
import SignUp from './component/SignUp';
import GameplayStats from './component/gameplayStats.component';
import TypeStats from './component/typeStats.component';
import TrainerStats from './component/trainerStats.component';
import TrainerProfile from './component/trainerProfile.component';
import GameplayProfile from './component/gameplayProfile.component';
import TypeProfile from './component/typeProfile.component';
import AllStats from './component/allTrainerStats.component';
import StatHistory from './component/statHistory.component';
import MenuAppBar from './component/menubar.component';

function App() {

  return (
    <>
    <MenuAppBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInSide />}/>
        <Route path='/Login' element={<SignInSide />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/GameplayMedals' element={<GameplayStats/>}/>
        <Route path='/TypeMedals' element={<TypeStats/>}/>
        <Route path='/TrainerStats' element={<TrainerStats/>}/>
        <Route path='/TrainerProfile' element={<TrainerProfile/>}/>
        <Route path='/GameplayProfile' element={<GameplayProfile/>}/>
        <Route path='/TypeProfile' element={<TypeProfile/>}/>
        <Route path='/AllStats' element={<AllStats/>}/>
        <Route path='/History' element={<StatHistory/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;