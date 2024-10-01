import React, {useRef, useContext} from "react";
import { MdAddComment } from "react-icons/md";

const Inputs = ({ onAddButtonClick }) => {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  let handleAddButtonClicked = (event) => {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    onAddButtonClick(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  // const contextObj = useContext(TasksDataContext);
  // const tasksData = contextObj.tasksData;
  return (
    <>
      <div className="container kg-container">
        <form action="" onSubmit={handleAddButtonClicked}>
          <div className="row">
            <div className="col-sm">
              <input
                type="text"
                ref={todoNameElement}
                placeholder="Enter a task"
              />
            </div>
            <div className="col-sm">
              <input type="date" ref={todoDateElement} />
            </div>
            <div className="col-sm">
              <button type="submit" className="btn btn-success kg-button">
                <MdAddComment />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Inputs;
