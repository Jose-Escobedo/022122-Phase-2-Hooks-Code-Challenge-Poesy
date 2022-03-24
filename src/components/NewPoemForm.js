import React from "react";
import { useState, useEffect } from "react";

function NewPoemForm({
  poems,
  setPoems,
  handleRender,

  handleTitle,
}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [piece, setPiece] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }
  function handlePieceChange(e) {
    setPiece(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      title: title,
      author: author,
      content: piece,
      id: Math.random(),
    };
    console.log(formData);
    const dataArray = [...poems, formData];
    handleRender(dataArray);
    //   fetch("http://localhost:8004/poems", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(dataArray),
    //   })
    //     .then((r) => r.json())
    //     .then((dataArray) => handleRender(dataArray));
    // }
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={handleTitleChange} />
      <input
        placeholder="Author"
        value={author}
        onChange={handleAuthorChange}
      />
      <textarea
        placeholder="Write your masterpiece here..."
        rows={10}
        value={piece}
        onChange={handlePieceChange}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
