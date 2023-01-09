import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

//import Button from '@mui/material/Button';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import LoginPage from './component/login.component';
import SignUpPage from './component/signup.component';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/Login' element={<LoginPage />}/>
            <Route path='/SignUp' element={<SignUpPage />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
