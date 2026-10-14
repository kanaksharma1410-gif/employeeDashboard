import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex screen mt-10 justify-between gap-3  flex-wrap lg:flex-nowrap'>
      <div className='rounded-xl w-[45%] bg-red-400 py-5 px-10'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Active</h3>
      </div>
      <div className='rounded-xl w-[45%] bg-emerald-400 py-5 px-10'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] bg-blue-400 py-5 px-10'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className='rounded-xl w-[45%] bg-purple-400 py-5 px-10'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
