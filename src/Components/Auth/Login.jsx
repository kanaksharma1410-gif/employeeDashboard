import React, { useState } from 'react'

const Login = ({handleLogin}) => {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const submitHandler=(e)=>{
  e.preventDefault();
  handleLogin(email,password)
setEmail('')
  setPassword('')

}

  return (
    <div className='flex flex-col  items-center justify-center h-screen w-screen'>
      <h1 className='text-4xl font-semibold text-pink-200'>Log in</h1>
   <div className=' p-7 rounded-xl border-emerald-600 border-2 mt-10 py-20 '>
    <form 
    onSubmit={(e)=>{
      submitHandler(e)
    }}
    className='flex flex-col items-center justify-center  '>
        <input required
        value={email} 
        onChange={(e)=>{
          setEmail(e.target.value)
          
        }}
         className='  border-2 border-emerald-600 rounded-full py-3 px-10 text-xl outline-none placeholder:text-gray-400' type="email"  
         
         placeholder='Enter your email'

       />
        <input required 
        value={password} 
        onChange={(e)=>{
          setPassword(e.target.value)
          
        }}
        className='  border-2 border-emerald-600 rounded-full py-3 px-10 text-xl outline-none placeholder:text-gray-400 mt-4' type="password" placeholder='Enter your password'
        />
        <button className='   rounded-full py-3 px-32 text-xl outline-none bg-emerald-700 border-none mt-5  text-white font-semibold '>Login</button>
    </form>
   </div>
    </div>
  )
}

export default Login
