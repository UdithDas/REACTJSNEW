import React, { useState } from 'react'
import classes from './Login.module.css'

const Login = (props) => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState(false);
    

    const emailHandler=(event)=>{
        // console.log(event.target.value)
        setEmail(event.target.value)
    }
    const passHandler=(event)=>{
        // console.log(event.target.value)
        if(event.target.length<8)
        {
            setError(true)
        }else
        {
            setError(false)
        }
    
        setPassword(event.target.value)
        
    }
    
    const submitHandler=(event)=>{
        event.preventDefault();
        if(email.trim()==="" || password.length<8)
        {
            setError(true);
            return;
        }
        else
        {
            props.aaa(email,password);
        }

        console.log(email);
        console.log(password);
        const myobj = {
        Email: email,
       password: password
        

    }
    console.log(myobj)
    }
    
  return (
    <div>
        <h3>Login Page</h3>
        <form onSubmit={submitHandler}>
            <input type='email' onChange={emailHandler} className={classes.text} placeholder='Your Email'></input><br/>
            <input type='password' onChange={passHandler} className={classes.text} placeholder='Password'></input><br/>
            <button type='submit' className={classes.button1}>LOGIN</button><br/> 
            {error && "Password must be 8 or more"}  
        </form>
    </div>
  )
}

export default Login