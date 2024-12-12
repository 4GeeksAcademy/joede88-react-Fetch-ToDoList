import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { fetchUserTodos } from "../services/api";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isHovered, setIsHovered] = useState("");

  function agregarTarea(e) {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      fetch(`https://playground.4geeks.com/todo/todos/JoeDiaz`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          label: inputValue,
          is_done: false,
        }),
      }).then(() => {
        fetchUserTodos(setTodos);
        setInputValue("");
      });
    }
  }

  function removerTarea(id) {
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetchUserTodos(setTodos);
    });
  }

  useEffect(() => {
    fetchUserTodos(setTodos);
  }, []);

  return (
    <Container className="caja font-monospace">
      <h2>To Do List</h2>
      <input
        className="mb-2 rounded border border-4"
        type="text"
        placeholder="Introduce new task"
        value={inputValue}
        onKeyDown={(e) => agregarTarea(e)}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <div>
        {isEmpty(todos) ? (
          <div className="tarea bg-warning-subtle border border-black rounded mb-1">
            No tasks added
          </div>
        ) : (
          todos.map((task) => {
            return (
              <div
                key={task.id}
                className="tarea bg-info-subtle border border-black rounded mb-1"
                onMouseEnter={() => setIsHovered(task.id)}
                onMouseLeave={() => setIsHovered("")}
              >
                {task.label}
                <span
                  className="float-end me-3 fw-bold"
                  role="button"
                  style={{
                    visibility: isHovered === task.id ? "visible" : "hidden",
                  }}
                  onClick={() => removerTarea(task.id)}
                >
                  X
                </span>{" "}
              </div>
            );
          })
        )}
      </div>
    </Container>
  );
};

export default ToDoList;
