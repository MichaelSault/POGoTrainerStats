import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInSide from './component/SignInSide';
import SignUp from './component/SignUp';

function App() {

  const [returnedData, setReturnedData] = useState({EmployeeID: 0, Firstname: '', Lastname: '', Age: 0, Gender: ''});
  const [employee, setEmployee] = useState({EmployeeID: 0, Firstname: '', Lastname: '', Age: 0, Gender: ''}) //use state is a hook for functional components

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if (name === 'EmployeeID' || name === 'Age'){
      setEmployee(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      return;
    }
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const fetchData = async () => {
    console.log(employee);
    const newData = await fetch('http://localhost:5000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: employee.Firstname
      })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])
  }

  const createEmployee = async () => {
    const newData = await fetch('http://localhost:5000/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...employee
      })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInSide />}/>
        <Route path='/Login' element={<SignInSide />}/>
        <Route path='/SignUp' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;