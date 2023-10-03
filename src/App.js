import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const[log,setLog]=useState(false);
    const logHandler=(email,password)=>{
        setLog(true)
    }
    const outHandler = () => {
      setLog(false)
  }
  return (
    <div className="App">
      {log && <Home yyy={outHandler}/>}
      {!log && <Login aaa={logHandler}/>}
    </div>
  );
}

export default App;
