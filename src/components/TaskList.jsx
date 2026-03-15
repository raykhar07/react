import React, {useContext} from 'react'
import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'


function TaskList() {

    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0){
        return <h1>No hay tareas aún</h1>
    }

    return (
    <div className='tasklist'>
        {tasks.map((task) => (
            <TaskCard key={task.id} task={task}/>
        ))}
    </div>
    )
}

export default TaskList
