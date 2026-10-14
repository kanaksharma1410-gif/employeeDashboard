import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListNumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-5 bg-[#1C1C1C] h-screen overflow-hidden'>
     
        <Header data={props.data}  changeUser={props.changeUser}/>
        <TaskListNumber data={props.data} changeUser={props.changeUser}/>
        <Tasklist data={props.data} changeUser={props.changeUser}/>
    
    </div>
  )
}

export default EmployeeDashboard
