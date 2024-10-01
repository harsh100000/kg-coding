import { createContext } from 'react'

export const TasksDataContext = createContext({
    tasksData:[],
    onAddButtonClick:()=>{},
    onDeleteButtonClick: ()=>{},
});