import React, { useState } from 'react'
import { setLocalStorage } from '../Utils/LocalStorage'

const Header = (props) => {

  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')        
    props.changeUser('')                                
    // window.location.reload()
  }

  return (
    <div className='flex justify-between items-end  '>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-4xl font-semibold'> Kanak👋</span></h1>

      <button onClick={logOutUser} className='bg-red-600 px-4 py-1 rounded text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
