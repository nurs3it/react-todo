import React from "react";
import PropTypes from "prop-types";

function TodoItem({key, item, active, toggleItem}) {
  return (
    <a key={key}
       onClick={() => toggleItem(item !== active ? item : null)}
       className={`list-group-item list-group-item-action ${item === active ? 'active' : ''}`}
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{item.title}</h5>
      </div>
      <p className="mb-1">
        Donec id elit non mi porta gravida at eget metus.
        Maecenas sed diam eget risus varius blandit.
      </p>
      <span className={`badge badge-${item.completed ? 'success' : 'warning'}`}>
        {item.completed ? 'Completed' : 'In process'}
      </span>
    </a>
  )
}

TodoItem.propTypes = {
  toggleItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  active: PropTypes.object,
  key: PropTypes.string
}

export default TodoItem
