import React, { useContext } from "react";
import Todo from "./Todo";
import { TasksDataContext } from "../store/todo_items_store";

const TodoItems = ({ onDeleteButtonClick }) => {
  const {tasksData} = useContext(TasksDataContext)
  
  return (
    <>
      {tasksData.map((taskData, index) => (
        <Todo
          key={index}
          task={taskData.task}
          date={taskData.date}
          onDeleteButtonClick={() => onDeleteButtonClick(index)}
        />
      ))}
    </>
  );
};

export default TodoItems;
