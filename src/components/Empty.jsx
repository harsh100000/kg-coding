import React, { useContext } from 'react'
import { TasksDataContext } from '../store/todo_items_store'

const Empty = () => {
  const contextObj = useContext(TasksDataContext)
  const tasksData = contextObj.tasksData;
  return (
    <div>
        {tasksData.length===0 && <h3>Todo items appears here.</h3>}
    </div>
  )
}

export default Empty