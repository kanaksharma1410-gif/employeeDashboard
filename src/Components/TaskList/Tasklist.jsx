import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import ComleteTask from './ComleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({ data }) => {
  return (
    <div id='taskList' className='h-[55%] w-full  mt-5  flex  items-center justify-start gap-10 py-5  overflow-x-auto '>
    {data.tasks.map((elem, idx)=>{
        // Har ek condition ko independent banayein taaki ek task multiple status match kar sake agar zaroorat ho
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />
        }
        if (elem.completed) {
          return <ComleteTask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
        return null
    })}
    </div>
  )
}

export default Tasklist