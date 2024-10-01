import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";

const Todo = (props) => {
  return (
    <>
      <div className="container kg-container">
        <div className="row">
          <div className="col-sm">
            <h4>{props.task}</h4>
          </div>
          <div className="col-sm">
            <h4>{props.date}</h4>
          </div>
          <div className="col-sm">
            <button type="button" className="btn btn-danger kg-button" onClick={props.onDeleteButtonClick} >
            <AiTwotoneDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
