import React from "react";
import PropTypes, {object} from "prop-types";
import TodoItem from "./TodoItem";
import Loader from "../Loader";

function TodoList({todoList, loader, active, setActive}) {
  return (
    <div>
      {
        todoList && todoList.length ?
          todoList.map(item => <TodoItem key={`item-${item.id}`} item={item} active={active} toggleItem={setActive}/>) :
          loader ? <Loader/> : <p>no data</p>
      }
    </div>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(object),
  loader: PropTypes.bool,
  active: PropTypes.bool,
  setActive: PropTypes.func
}

export default TodoList
