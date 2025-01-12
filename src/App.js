import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [upperCase, setUpperCase]=useState(false);
  let [lowerCase, setLowerCase]=useState(false);
  let [number, setNumber]=useState(false);
  let [symbols, setSymbols]=useState(false);
  let [passwordlen,setPasswordlen]=useState(10);
  let [fpass,setFpass]=useState('')

  let createPassword=()=>{
    let finalPass=''
    let charSet=''
    if(upperCase || lowerCase || number || symbols ){
      if(upperCase) charSet+=UC;
      if(lowerCase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbols) charSet+=SC;
      for(let i=0; i<passwordlen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))        
      }
      setFpass(finalPass);
    }
    else{
      alert("Please select one checkbox")
    }
    }
    let copyPass=()=>{
      navigator.clipboard.writeText(fpass)
    }
  return (
    <>
    <div className='passwordBox'>
      <h2>Password Generator</h2>
        <div className='passwordIn'>
          <input type='text'value={fpass} readOnly/><button onClick={copyPass}>Copy</button>
        </div>
        <div className='passwordlength'>
          <label>Password Length</label>
          <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setPasswordlen(event.target.value)}/>
        </div>
        <div className='passwordlength'>
          <label>Include Upper Latters</label>
          <input type='checkbox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)}/>
        </div>
        <div className='passwordlength'>
          <label>Include Lower Latters</label>
          <input type='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}/>
        </div>
        <div className='passwordlength'>
          <label>Include Number</label>
          <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
        </div>
        <div className='passwordlength'>
          <label>Include Symbols</label>
          <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
        </div>
        <button className='btn' onClick={createPassword}>
          Generator Password
        </button>
    </div>
    </>
  );
}

export default App;
