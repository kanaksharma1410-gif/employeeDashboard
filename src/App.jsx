import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { GetLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  // localStorage.clear()

const [user , setUser]=useState(null)
const [loggedInuserData,setloggedInUserData] =useState(null)
const [userData,setUserData] = useContext(AuthContext)
// console.log(authData?.employees)

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData=JSON.parse(loggedInUser)
    setUser(userData.role)
    setloggedInUserData(userData.data)
  }
},[])

setLocalStorage()
const handleLogin = (email,password)=>{
if(email=='admin@me.com' && password=='123'){
  setUser('admin')
  localStorage.setItem('loggedInUser' , JSON.stringify({role:'admin'}))

}else if(userData ){
  const employee=  userData?.find((e)=>email==e.email && e.password==password)
   if(employee){
     setUser('employee')
     setloggedInUserData(employee)
localStorage.setItem('loggedInUser' , JSON.stringify({role:'employee',data:employee}))
   }
}
  else{
    alert('invalid credentials')
  }
}


  return (
    <>
  {!user? <Login handleLogin={handleLogin}/>: ''}
  {user=='admin' ? <AdminDashboard changeUser={setUser} data={loggedInuserData} /> : (user=='employee' ? <EmployeeDashboard data={loggedInuserData} changeUser={setUser} /> : null) }
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
