import React from 'react'

const ComleteTask = ({data}) => {
  return (
    <div className='bg-blue-400 w-70 rounded-xl  mb-5 h-full px-4 py-3 shrink-0'>
      <div className='flex justify-between items-center mb-2 '>
        <h3 className='bg-red-600 px-3 py-0.6 rounded text-sm  ' >{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <div className='text-2xl font-semibold'>{data.taskTitle}</div>
      <p className='text-xs mt-2'>{data.taskDescription}</p>
  <div className='flex justify-between mt-10'>
    <button className='bg-green-800 py-1 px-2 text-sm'>mark as completed</button>
    <button className='bg-red-800 py-1 px-2 text-sm'>mark as failed</button>
</div>
    </div>
     
  )
}

export default ComleteTask
