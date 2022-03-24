import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poemsList }) {
  return (
    <div className="poems-container">
      {poemsList.map((poem) => (
        <Poem poem={poem} key={poem.id} />
      ))}
    </div>
  );
}

export default PoemsContainer;
