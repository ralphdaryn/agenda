import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [list, setList] = useState(getLocalStorage());
  const [edit, setEdit] = useState(false);

  function postNote(addNote) {
    setList((prevList) => {
      return [...prevList, addNote];
    });
  }

  function deleteNote(id) {
    setList((prevList) => {
      return prevList.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function editItem(id) {
    setEdit(true);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <Header />
      <CreateArea onPost={postNote} />
      {list.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            subject={noteItem.subject}
            onDelete={deleteNote}
            onEdit={() => editItem(index)}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
