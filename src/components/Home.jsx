import React from "react";
import AppName from "./AppName";
import Inputs from "./Inputs";
import TodoItems from "./TodoItems";
import { useState } from "react";
import Empty from "./Empty";
import { TasksDataContext } from "../store/todo_items_store";

const Home = () => {
  const [tasksData, setTasksData] = useState([]);

  const onAddButtonClick = (itemName, itemDate) => {
    setTasksData((currValue) => {
      let newArr = [...currValue, { task: itemName, date: itemDate }];
      return newArr;
    });
  };

  const onDeleteButtonClick = (index) => {
    let newArr = [...tasksData];
    newArr.splice(index, 1);
    setTasksData(newArr);
  };

  return (
    <TasksDataContext.Provider
      value={{
        tasksData:tasksData
      }}
    >
      <AppName />
      <Inputs onAddButtonClick={onAddButtonClick} />
      <Empty />
      <TodoItems onDeleteButtonClick={onDeleteButtonClick} />
    </TasksDataContext.Provider>
  );
};
export default Home;
// {task: "harsh", date: "10-11-2001"}
