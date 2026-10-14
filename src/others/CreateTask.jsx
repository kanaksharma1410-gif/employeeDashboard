import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthProvider'
// useContext

const CreateTask = () => {         

  const [userData,setUserData]=useContext(AuthContext)     
  
    const [taskTitle , setTile]=useState('')
    const [taskDate , setdate]=useState('')
    const [assign , setassign]=useState('')
    const [category , setcategory]=useState('')
    const [taskDescription , setdescription]=useState('')

    const [newtask,setnewTask] = useState({})

    const submitHandler=(e)=>{
      e.preventDefault()
      setnewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
     
      const data = userData
     data.forEach(function(elem){
      if(assign==elem.firstName){
        elem.tasks.push(newtask)
        elem.taskCounts.newTask=elem.taskCounts.newTask+1
        // console.log(elem)
      }
     })
     
    //  console.log(data)
    //  localStorage.setItem('employees',JSON.stringify(data))
    setUserData(data)
    console.log(data)
       setTile('')
        setdescription('')
        setdate('')
        setassign('')
          setcategory('')
      
    }

  
  return (
    <div>
      <div>
        <form className='flex  justify-between items-start mt-5 w-full bg-[#1c1c1c] flex-wrap px-10 py-5 '
        onSubmit={(e)=>{
        submitHandler(e)
        }}
        >
          <div className='w-1/2 flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
            <h3>Task Title</h3>  
          <input 
          value={taskTitle}
          onChange={(e)=>{
             setTile(e.target.value)
          }}
          type="text" placeholder='Make a UI design ' className='border-2 w-[80%] py-1 px-4 bg-transparent  text-sm outline-none' />
          </div>
             <div  className='flex flex-col gap-1'>
              <h3>Date</h3>
          <input
          value={taskDate}
           onChange={(e)=>{
             setdate(e.target.value)
          }}
          type="date" className='border-2 w-[80%] py-1 px-4 bg-transparent text-sm outline-none'/>
           </div>
          <div  className='flex flex-col gap-1'>
           <h3>Assign to</h3>
           <input 
           value={assign}
            onChange={(e)=>{
             setassign(e.target.value)
          }}
           type="text" placeholder='Employee name' className='border-2 w-[80%] py-1 px-4 text-sm outline-none'/>
          </div>
          <div  className='flex flex-col gap-1'> 
            <h3>Category</h3>
          <input 
          value={category}
           onChange={(e)=>{
             setcategory(e.target.value)
          }}
          type="text" placeholder='design,dev,etc' className='border-2 w-[80%] py-1 px-4 text-sm outline-none' />
          </div>
         
          </div>
          
         <div className='w-1/2 justify-between h-full flex flex-col  '>
           <div className='h-65 flex flex-col gap-1'>
            <h3>Description</h3>
          <textarea
          value={taskDescription}
           onChange={(e)=>{
             setdescription(e.target.value)
          }}
          name="" id="" className='  border-2  w-[80%] h-full py-2 px-4 rounded text-sm outline-none' ></textarea>
          </div>
           <button className='mt-5 bg-emerald-700 hover:bg-emerald-500 w-[80%] py-2 rounded active:scale-95'
          
           >Create task</button>
         </div>
          
       
        </form>
      </div>
    </div>
  )
}

export default CreateTask
