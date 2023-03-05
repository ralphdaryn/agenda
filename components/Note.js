import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Note(props) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [subject, setSubject] = useState(props.subject);

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    setEditMode(true);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }

  function handleSave() {
    props.onEdit(props.id, title, subject);
    setEditMode(false);
  }

  return (
    <div className="note">
      {editMode ? (
        <div className="edit-note">
          <input type="text" value={title} onChange={handleTitleChange} />
          <textarea value={subject} onChange={handleSubjectChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h1>{title}</h1>
          <p>{subject}</p>
          <div className="edit-button">
            <button onClick={handleEdit}>
              <EditIcon />
            </button>
            <button onClick={handleDelete}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Note;
