import React from "react";
import PropTypes from "prop-types";

function Actions({openModal, closeModal, active, setType, deleteItem}) {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {active ?
        <button onClick={() => deleteItem(active)} type="button" className="btn btn-danger">Delete</button> : null}
      {
        active
          ? <button onClick={() => {
            setType("CHANGE");
            openModal();
          }} data-toggle="modal" data-target="#todo-modal" type="button"
                    className="btn btn-warning">Change</button>
          : null
      }
      <button onClick={() => {
        setType("NEW");
        openModal();
      }} data-toggle="modal" data-target="#todo-modal" type="button"
              className="btn btn-success">New
      </button>
    </div>
  )
}

Actions.propTypes = {
  active: PropTypes.object,
  setType: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  openModal: PropTypes.func,
  closeModal: PropTypes.func
}

export default Actions