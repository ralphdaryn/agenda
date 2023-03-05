import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";


function CreateArea(props) {
  const [isExpand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    subject: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function postNote(event) {
    props.onPost(note);
    setNote({
      title: "",
      subject: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Subject"
          />
        )}
        <textarea
          onClick={expand}
          name="subject"
          onChange={handleChange}
          value={note.subject}
          placeholder="Write Something..."
        />
        <Zoom in={isExpand}>
          <Fab onClick={postNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
