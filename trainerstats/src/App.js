import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import {useState} from 'react';

//import Button from '@mui/material/Button';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import LoginPage from './component/login.component';
import SignUpPage from './component/signup.component';

function App() {
  const [returnedData, setReturnedData] = useState(['hello fellow hu-mans [:D]']);

  const getData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData.result)
  }

  return (
    <div>
        {returnedData}
          <button onClick={() => getData('/quit')}>Hello Mr.Button</button>
        {returnedData}
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
