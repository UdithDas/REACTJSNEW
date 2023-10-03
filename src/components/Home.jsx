import React, { useState } from 'react'
import  style from './Login.module.css'
import { ref, set } from 'firebase/database';
import { db } from './New';
import { uid } from 'uid';


const Home = (props) => {
 


  const [name,setname]=useState("");
  const [date,setdate]=useState("");
  const [dis,setdis]=useState("");
  const [url,seturl]=useState("");

  const namechange =(event)=>{
    setname(event.target.value)
  }
  const datechange =(event)=>{
    setdate(event.target.value)
  }
  const dischange =(event)=>{
    setdis(event.target.value)
  }
  const urlchange =(event)=>{
    seturl(event.target.value)
  }



   const submitHandler =(event)=> {
event.preventDefault();
    const uuid = uid();
    const name="udith"
    set(ref(db,`Events/${uuid}`),{
        name,
        date,
        dis,
        url,
        uuid
    });

  }
  const print = {
    name: name,
   date: date,
   discription:dis,
   url:url
    

}
  const[err,SetErr]=useState(false);
const Fprint = (event) => {
    event.preventDefault();
    if(name.trim() ==='' || date.trim() ==='' || dis.trim() ==='' || url.trim() ==='' ){
        SetErr(true);
        return;
    }else{
        SetErr(false); 
        console.log(print);
    }
   
}
const LogoutHandler = () => {
    props.yyy(true)
}

  return (
    <div>
    <form onSubmit={submitHandler}>
        <input className={style.text} type='text' placeholder='name' onChange={namechange}></input><br />
        <input className={style.text}  type='date' onChange={datechange}></input><br />
        <input className={style.text}  type='text' placeholder='Discribtion' onChange={dischange}></input><br />
        <input className={style.text}  type='text' placeholder='Address' onChange={urlchange}></input><br />
        <br />
        <button type='submit' className={style.button}>Submit</button>
        <button type='submit' className={style.button} onClick={LogoutHandler}>Logout</button>
        </form>
    </div>
  )
}

export default Home
