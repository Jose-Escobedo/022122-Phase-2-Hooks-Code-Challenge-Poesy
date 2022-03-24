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

  // useEffect(()=>{
  //   fetch("http://localhost:8004/poems", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //     Accept: "applications/json",
  //   },
  //   body: JSON.stringify(newObject),
  // })
  //   .then((res) => res.json())
  //   .then(function (newObject) {
  //     console.log(newObject);
  //   });
  // handleRender(newObject);
  // },[])

  useEffect(() => {
    fetch("http://localhost:8004/poems")
      .then((res) => res.json())
      .then(handleRender);
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
