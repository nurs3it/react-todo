import React, {useState, useEffect} from "react";
import Actions from "./Actions";
import TodoModal from "./Modal";
import TodoList from "./TodoList";

export default function Todo() {
  let [todoList, setTodoList] = useState([])
  let [active, setActive] = useState(null);
  let [actionType, setActionType] = useState("NEW") // Types: "NEW", "CHANGE"
  let [loader, setStateLoader] = useState(false);
  let [modal, setModalState] = useState(false);
  
  useEffect(() => {
    setStateLoader(true)
    setTimeout(() => { // fake delay
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
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
  
  let createTodo = (item) => {
    setTodoList([item, ...todoList]);
    closeModal();
  }
  
  let updateTodo = (item) => {
    let array = todoList;
    array[array.find((el, index) => el.id === item.id ? index : null)] = item;
    closeModal();
  }
  
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-end mb-2">
        <Actions openModal={openModal}
                 closeModal={closeModal}
                 active={active}
                 setType={setActionType}
                 deleteItem={deleteItem}/>
        {modal ? <TodoModal isOpen={modal}
                            isNew={actionType === "NEW"}
                            form={active}
                            closeModal={closeModal}
                            updateTodo={updateTodo}
                            createTodo={createTodo}/> : null}
      </div>
      <div className="col-12">
        <div className="list-group">
          <TodoList active={active}
                    loader={loader}
                    setActive={setActive}
                    todoList={todoList}/>
        </div>
      </div>
    </div>
  )
}
