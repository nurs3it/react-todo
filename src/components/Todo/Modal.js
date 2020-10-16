import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/Modal.style.scss"

function TodoModal({isOpen, isNew, form, closeModal}) {
  let defaultForm = {
    title: "",
    userId: 1,
    completed: false
  }
  let [editForm, setEditForm] = React.useState(null);
  React.useEffect(() => {
    setEditForm(isNew ? defaultForm : form);
  }, [])
  
  let onChangeTitle = (value) => {
    let form = editForm;
    form.title = value;
    setEditForm(form);
  }
  
  let onChangeStatus = (value) => {
    let form = editForm;
    form.completed = value;
    setEditForm(form);
  }
  return (
    <div>{isOpen ? <div className="modal-wrapper">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo Modal</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {editForm ?
              <form className="form-group">
                <label htmlFor="form-title">Title</label>
                <input onChange={(event) => onChangeTitle(event.target.value)} type="text" value={editForm.title}
                       className="form-control mb-2"/>
                <label htmlFor="form-status">Status</label>
                <select onChange={(event) => onChangeStatus(event.target.value)} className="form-control"
                        value={editForm.completed}>
                  <option value={true} label={`Completed`}/>
                  <option value={false} label={`In Process`}/>
                </select>
              </form> : null}
          </div>
          <div className="modal-footer">
            <button onClick={() => closeModal()} type="button" className="btn btn-secondary"
                    data-dismiss="modal">Close
            </button>
            <button type="button" className="btn btn-primary">{isNew ? 'Create Todo' : 'Update Todo'}</button>
          </div>
        </div>
      </div>
    </div> : null}</div>
  )
}

TodoModal.propTypes = {
  isOpen: PropTypes.bool,
  isNew: PropTypes.bool,
  form: PropTypes.object,
  closeModal: PropTypes.func
}

export default TodoModal
