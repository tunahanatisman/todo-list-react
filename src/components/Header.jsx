import React from "react";

const Header = ({ InputText, setInputText, todos, setTodos }) => {
 
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }; 
  const submitTodoHandler = (e) => {
    e.preventDefault(); 
    if (InputText === "") {
      alert("Please enter a todo");
      return; 
    }
    setTodos([
      ...todos, 
      { text: InputText, completed: false, id: Math.random() * 1000 }, 
    ]);
    setInputText("");
  };
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={submitTodoHandler}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={InputText}
            onChange={inputTextHandler}
          />
        </form>
      </header>
    </div>
  );
};

export default Header;