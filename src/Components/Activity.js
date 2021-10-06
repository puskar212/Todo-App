import { useState } from "react";

const Task = ({ item, state2, index, setstate2 }) => {
  const [state, setstate] = useState(item.completed);
  const handleClick = () => {
    if (item.completed === true) {
      setstate(true);
    } else {
      setstate(true);
    }
  };
  const deleteclick = () => {
    let array = [...state2];

    if (index > -1) {
      array.splice(index, 1);
    }
    setstate2(array);
  };
  return (
    <div className="task" onClick={handleClick}>
      <span className={state ? "successful" : "unsuccessful"}>
        {item.title}
      </span>
      <div className={state ? "radio done" : "radio"}> </div>
      <button onClick={() => deleteclick()}>Delete</button>
    </div>
  );
};
export default Task;
