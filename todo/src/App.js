import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const [data, setData] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
  return (
    <>
    <Header/>
    <Form data1 = {[data, setData]}/>
    <List data1 = {[data, setData]}/>
    </>
  );
}

export default App;
