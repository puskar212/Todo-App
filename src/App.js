import React, { useState, useEffect } from "react";
import "./App.css";
import MainTask from "./Components/Maintask.js";
import Task from "./Components/Activity";

function App() {
  const [activeUser, setActiveUser] = useState(0);
  const [state1, setstate1] = useState([]);
  const [state2, setstate2] = useState([]);

  useEffect(() => {
    (async () => {
      const a = await fetch("https://jsonplaceholder.typicode.com/users");
      let b = await a.json();
      let x = await fetch("https://jsonplaceholder.typicode.com/todos");
      let y = await x.json();
      setstate1(b);
      setstate2(y);
    })();
  }, []);

  return (
    <div className="App">
      <div className="hard">
        {state1.map((e) => {
          return (
            <MainTask
              details={e}
              activeUser={activeUser}
              setActiveUser={setActiveUser}
              key={e.id}
            />
          );
        })}
      </div>

      <div className="veryhard">
        {state2
          .filter((e) => e.userId === activeUser)
          .map((e, i) => {
            return (
              <Task
                item={e}
                index={i}
                state2={state2}
                setstate2={setstate2}
                key={i}
              />
            );
          })}
          <button className="Add">+</button>
      </div>
    </div>
  );
}

export default App;
