const Task = ({ details, activeUser, setActiveUser }) => {
    const handleclick = () => {
      setActiveUser(details.id);
    };
    return (
      <div
        className={activeUser === details.id ? "allUser active" : "allUser"}
        onClick={() => handleclick()}
      >
        <span>{details.name}</span>
      </div>
    );
  };
  
  export default Task;