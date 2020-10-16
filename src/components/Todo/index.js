import React, {useState, useEffect} from "react";
import TodoItem from "./TodoItem";
import Loader from "../Loader";
import Actions from "./Actions";
import TodoModal from "./Modal";

export default function Todo() {
  let [todoList, setTodoList] = useState([])
  let [active, setActive] = useState(null);
  let [actionType, setActionType] = useState("NEW") // Types: "NEW", "CHANGE"
  let [loader, setStateLoader] = useState(false);
  let [modal, setModalState] = useState(false);
  
  useEffect(() => {
    setStateLoader(true)
    setTimeout(() => { // fake delay
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTodoList(json));
    }, 0)
    setStateLoader(false)
  }, []);
  
  let deleteItem = (item) => {
    setTodoList(todoList.filter(el => el.id !== item.id))
    if (active === item) {
      setActive(null)
    }
  }
  
  let openModal = () => {
    setModalState(true);
  }
  
  let closeModal = () => {
    setModalState(false);
  }
  
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-end mb-2">
        <Actions openModal={openModal} closeModal={closeModal} active={active} setType={setActionType} deleteItem={deleteItem} />
        { modal ? <TodoModal isOpen={modal} isNew={actionType === "NEW"} form={active} closeModal={closeModal} /> : null }
      </div>
      <div className="col-12">
        <div className="list-group">
          {
            todoList && todoList.length ?
              todoList.map(item => <TodoItem key={`item-${item.id}`} item={item} active={active} toggleItem={setActive}/>) :
              loader ? <Loader/> : <p>no data</p>
          }
        </div>
      </div>
    </div>
  )
}