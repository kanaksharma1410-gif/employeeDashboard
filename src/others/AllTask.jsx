import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData]=useContext(AuthContext)
  // console.log(authData.employees)
  return (
    <div id='task' className='bg-[#1c1c1c] p-5 mt-5 rounded flex flex-col gap-2  '>
      <div className='bg-red-400 rounded py-2 px-4 flex justify-between'>
        <h2 className='w-1/5 '>employee Name</h2>
        <h3 className='w-1/5 '>New Task</h3>
        <h5 className='w-1/5 '>Active Task</h5>
        <h5 className='w-1/5 '>Completed Task</h5>
        <h5 className='w-1/5 '>Failed Task</h5>
      </div>
      <div className='h-[90%]  flex flex-col gap-2'>
        {userData.map(function(elem ,idx){
  return  <div key={idx} className='border-2 border-emerald-600 rounded py-2 px-4 flex justify-between'>
        <h2 className=' text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
        <h3 className=' text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
        <h5 className=' text-lg font-medium w-1/5 text-yellow-300'>{elem.taskCounts.active}</h5>
        <h5 className=' text-lg font-medium w-1/5 text-purple-300'>{elem.taskCounts.completed}</h5>
        <h5 className=' text-lg font-medium w-1/5 text-pink-300'>{elem.taskCounts.failed}</h5>
      </div>
      })}
      </div>
     
      
    </div>
  )
}

export default AllTask
