import React from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import { useState, useEffect } from "react";

function App() {
  const [poems, setPoems] = useState([]);
  const [read, setRead] = useState(true);

  function handleRender(data) {
    setPoems(data);
  }

  useEffect(() => {
    fetch("http://localhost:8004/poems")
      .then((res) => res.json())
      .then(handleRender)
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={(e) => setRead(!read)}>Show/hide new poem form</button>
        {read ? (
          <NewPoemForm
            setPoems={setPoems}
            poems={poems}
            handleRender={handleRender}
          />
        ) : null}
      </div>
      <PoemsContainer poemsList={poems} />
    </div>
  );
}

export default App;
