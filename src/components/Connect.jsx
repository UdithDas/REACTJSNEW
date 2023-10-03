import React, { useState } from 'react'
import Login from './Login';

const Connect = () => {
    
  return (
    <div>
        {log && <Home/>}
        {!log && <Login aaa={logHandler}/>}
    </div>
  )
}

export default Connect